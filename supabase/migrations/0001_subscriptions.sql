-- Run this once in the Supabase SQL editor (or via `supabase db push`).
create table if not exists public.subscriptions (
  user_id uuid references auth.users(id) on delete cascade primary key,
  stripe_customer_id text unique,
  stripe_subscription_id text,
  status text not null default 'none', -- 'active' | 'trialing' | 'past_due' | 'canceled' | 'none'
  price_id text,
  current_period_end timestamptz,
  updated_at timestamptz not null default now()
);

alter table public.subscriptions enable row level security;

create policy "read own subscription"
  on public.subscriptions for select
  using (auth.uid() = user_id);

-- No insert/update/delete policy for regular users — only the service-role
-- key (used by the Stripe webhook route) can write to this table.
