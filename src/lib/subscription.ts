import { createClient } from "@/lib/supabase/server";

const ACTIVE_STATUSES = new Set(["active", "trialing"]);

const isSupabaseConfigured = () =>
  !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function getCurrentUser() {
  if (!isSupabaseConfigured()) return null;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

/**
 * Whether the current session belongs to a user with an active Pro
 * subscription. Fails closed (not subscribed) — both when Supabase isn't
 * configured yet and on any lookup error — so a misconfigured/unreachable
 * Supabase project gates content rather than 500ing the docs pages or
 * accidentally unlocking Pro content.
 *
 * Exception: in local dev (`next dev`), Pro content is always unlocked so
 * the whole site can be browsed without setting up Supabase/Stripe first.
 * This never applies to a production build/deploy (`NODE_ENV=production`).
 */
export async function hasActiveSubscription() {
  if (process.env.NODE_ENV === "development") return true;
  if (!isSupabaseConfigured()) return false;

  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return false;

    const { data } = await supabase
      .from("subscriptions")
      .select("status")
      .eq("user_id", user.id)
      .maybeSingle();

    return !!data && ACTIVE_STATUSES.has(data.status);
  } catch {
    return false;
  }
}
