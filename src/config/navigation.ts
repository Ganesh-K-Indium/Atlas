import type { NavGroup } from "@/types/content";

/**
 * Full curriculum IA. `status: "published"` items have a real MDX page under
 * src/content/**; everything else renders the shared "planned" placeholder
 * via the [...slug] catch-all until it's written. See ROADMAP.md.
 */
export const navigation: NavGroup[] = [
  {
    title: "Foundations",
    slug: "foundations",
    sections: [
      {
        title: "Linear Algebra",
        slug: "linear-algebra",
        items: [
          { title: "Vectors & Vector Spaces", slug: "vectors-vector-spaces", status: "published", difficulty: "beginner" },
          { title: "Matrices & Matrix Operations", slug: "matrices-operations", status: "published", difficulty: "beginner" },
          { title: "Eigenvalues & Eigenvectors", slug: "eigenvalues-eigenvectors", status: "published", difficulty: "intermediate" },
          { title: "Singular Value Decomposition (SVD)", slug: "svd", status: "published", difficulty: "advanced" },
          { title: "Principal Component Analysis — Derivation", slug: "pca-derivation", status: "published", difficulty: "advanced" },
          { title: "Matrix Calculus", slug: "matrix-calculus", status: "published", difficulty: "advanced" },
          { title: "Norms & Distances", slug: "norms-distances", status: "published", difficulty: "beginner" },
        ],
      },
      {
        title: "Calculus & Optimization",
        slug: "calculus-optimization",
        items: [
          { title: "Derivatives, Gradients & Jacobians", slug: "derivatives-gradients-jacobians", status: "published", difficulty: "beginner" },
          { title: "Chain Rule & Backpropagation Derivation", slug: "backpropagation-derivation", status: "published", difficulty: "advanced" },
          { title: "Gradient Descent — Derivation & Variants", slug: "gradient-descent", status: "published", difficulty: "intermediate" },
          { title: "Convex Optimization", slug: "convex-optimization", status: "published", difficulty: "advanced" },
          { title: "Lagrange Multipliers & KKT Conditions", slug: "lagrange-kkt", status: "published", difficulty: "advanced" },
          { title: "Numerical Methods & Stability", slug: "numerical-methods", status: "published", difficulty: "intermediate" },
        ],
      },
      {
        title: "Probability & Statistics",
        slug: "probability-statistics",
        items: [
          { title: "Probability Foundations", slug: "probability-foundations", status: "published", difficulty: "beginner" },
          { title: "Random Variables & Distributions", slug: "random-variables-distributions", status: "published", difficulty: "beginner" },
          { title: "Maximum Likelihood Estimation", slug: "maximum-likelihood-estimation", status: "published", difficulty: "intermediate" },
          { title: "Bayesian Statistics & Inference", slug: "bayesian-statistics", status: "published", difficulty: "advanced" },
          { title: "Markov Chains & Monte Carlo (MCMC)", slug: "markov-chains-monte-carlo", status: "published", difficulty: "advanced" },
          { title: "Expectation-Maximization Algorithm", slug: "expectation-maximization", status: "published", difficulty: "advanced" },
          { title: "Hypothesis Testing & Confidence Intervals", slug: "hypothesis-testing", status: "published", difficulty: "intermediate" },
        ],
      },
      {
        title: "Information Theory",
        slug: "information-theory",
        items: [
          { title: "Entropy & Cross-Entropy", slug: "entropy-cross-entropy", status: "published", difficulty: "intermediate" },
          { title: "KL Divergence & Mutual Information", slug: "kl-divergence-mutual-information", status: "published", difficulty: "intermediate" },
          { title: "Fisher Information", slug: "fisher-information", status: "published", difficulty: "advanced" },
        ],
      },
    ],
  },
  {
    title: "Machine Learning",
    slug: "machine-learning",
    sections: [
      {
        title: "Supervised Learning",
        slug: "supervised-learning",
        items: [
          { title: "Linear & Logistic Regression", slug: "linear-logistic-regression", status: "published", difficulty: "beginner" },
          { title: "Naive Bayes", slug: "naive-bayes", status: "published", difficulty: "beginner" },
          { title: "K-Nearest Neighbors", slug: "k-nearest-neighbors", status: "published", difficulty: "beginner" },
          { title: "Decision Trees & Random Forests", slug: "decision-trees-random-forests", status: "published", difficulty: "intermediate" },
          { title: "Gradient Boosting: XGBoost, LightGBM, CatBoost", slug: "gradient-boosting", status: "published", difficulty: "advanced" },
          { title: "Support Vector Machines", slug: "support-vector-machines", status: "published", difficulty: "intermediate" },
        ],
      },
      {
        title: "Unsupervised & Self-Supervised Learning",
        slug: "unsupervised-learning",
        items: [
          { title: "Clustering (K-Means, DBSCAN, Hierarchical)", slug: "clustering", status: "published", difficulty: "intermediate" },
          { title: "Dimensionality Reduction (t-SNE, UMAP)", slug: "dimensionality-reduction", status: "published", difficulty: "intermediate" },
          { title: "Anomaly & Outlier Detection", slug: "anomaly-detection", status: "published", difficulty: "intermediate" },
          { title: "Self-Supervised Learning", slug: "self-supervised-learning", status: "published", difficulty: "advanced" },
        ],
      },
      {
        title: "Reinforcement Learning",
        slug: "reinforcement-learning",
        items: [
          { title: "Markov Decision Processes", slug: "markov-decision-processes", status: "published", difficulty: "intermediate" },
          { title: "Q-Learning & Value-Based Methods", slug: "q-learning", status: "published", difficulty: "intermediate" },
          { title: "Policy Gradients & Actor-Critic", slug: "policy-gradients-actor-critic", status: "published", difficulty: "advanced" },
          { title: "PPO & Trust Region Methods", slug: "ppo-trust-region", status: "published", difficulty: "advanced" },
        ],
      },
      {
        title: "Model Evaluation & Selection",
        slug: "evaluation",
        items: [
          { title: "Bias-Variance Tradeoff", slug: "bias-variance-tradeoff", status: "published", difficulty: "beginner" },
          { title: "Cross-Validation Strategies", slug: "cross-validation", status: "published", difficulty: "beginner" },
          { title: "Classification & Regression Metrics", slug: "metrics", status: "published", difficulty: "beginner" },
          { title: "Hyperparameter Optimization & Bayesian Search", slug: "hyperparameter-optimization", status: "published", difficulty: "intermediate" },
          { title: "Ensemble Learning: Bagging, Boosting, Stacking", slug: "ensemble-learning", status: "published", difficulty: "intermediate" },
        ],
      },
    ],
  },
  {
    title: "Deep Learning",
    slug: "deep-learning",
    sections: [
      {
        title: "Neural Network Fundamentals",
        slug: "fundamentals",
        items: [
          { title: "Perceptrons & Multilayer Perceptrons", slug: "perceptrons-mlp", status: "published", difficulty: "beginner" },
          { title: "Activation Functions", slug: "activation-functions", status: "published", difficulty: "beginner" },
          { title: "Weight Initialization & Normalization", slug: "initialization-normalization", status: "published", difficulty: "intermediate" },
          { title: "Optimizers: SGD, Momentum, Adam, AdamW", slug: "optimizers", status: "published", difficulty: "intermediate" },
        ],
      },
      {
        title: "Convolutional & Vision Architectures",
        slug: "vision-architectures",
        items: [
          { title: "Convolutional Neural Networks", slug: "cnn", status: "published", difficulty: "intermediate" },
          { title: "ResNet, DenseNet & EfficientNet", slug: "resnet-densenet-efficientnet", status: "published", difficulty: "advanced" },
          { title: "U-Net for Segmentation", slug: "unet", status: "published", difficulty: "advanced" },
          { title: "Vision Transformers (ViT)", slug: "vision-transformers", status: "published", difficulty: "advanced" },
          { title: "YOLO Object Detection Family", slug: "yolo", status: "published", difficulty: "advanced" },
          { title: "CLIP & Multimodal Vision-Language Models", slug: "clip", status: "published", difficulty: "advanced" },
          { title: "Segment Anything (SAM)", slug: "segment-anything", status: "published", difficulty: "advanced" },
        ],
      },
      {
        title: "Sequence Models",
        slug: "sequence-models",
        items: [
          { title: "RNNs, LSTMs & GRUs", slug: "rnn-lstm-gru", status: "published", difficulty: "intermediate" },
          { title: "Seq2Seq & Encoder-Decoder Models", slug: "seq2seq", status: "published", difficulty: "intermediate" },
        ],
      },
      {
        title: "Attention & Transformers",
        slug: "attention-transformers",
        items: [
          { title: "The Transformer Architecture", slug: "transformer-architecture", status: "published", difficulty: "advanced" },
          { title: "Self-Attention & Multi-Head Attention", slug: "self-attention-multi-head", status: "published", difficulty: "advanced" },
          { title: "BERT & Encoder-Only Models", slug: "bert", status: "published", difficulty: "advanced" },
          { title: "GPT & Decoder-Only Models", slug: "gpt-decoder-only", status: "published", difficulty: "advanced" },
          { title: "T5 & Encoder-Decoder LLMs", slug: "t5", status: "published", difficulty: "advanced" },
        ],
      },
      {
        title: "Generative Models",
        slug: "generative-models",
        items: [
          { title: "Variational Autoencoders (VAEs)", slug: "vae", status: "published", difficulty: "advanced" },
          { title: "Generative Adversarial Networks (GANs)", slug: "gan", status: "published", difficulty: "advanced" },
          { title: "Diffusion Models & Stable Diffusion", slug: "diffusion-models", status: "published", difficulty: "expert" },
        ],
      },
      {
        title: "Graphs, MoE & Modern Sequence Architectures",
        slug: "modern-architectures",
        items: [
          { title: "Graph Neural Networks", slug: "graph-neural-networks", status: "published", difficulty: "advanced" },
          { title: "Mixture of Experts (MoE)", slug: "mixture-of-experts", status: "published", difficulty: "expert" },
          { title: "State Space Models: Mamba & RWKV", slug: "state-space-models", status: "published", difficulty: "expert" },
        ],
      },
    ],
  },
  {
    title: "Applied AI Domains",
    slug: "applied-domains",
    sections: [
      {
        title: "Domains",
        slug: "domains",
        items: [
          { title: "Computer Vision", slug: "computer-vision", status: "published", difficulty: "intermediate" },
          { title: "Natural Language Processing", slug: "natural-language-processing", status: "published", difficulty: "intermediate" },
          { title: "Speech AI (ASR & TTS)", slug: "speech-ai", status: "published", difficulty: "advanced" },
          { title: "Time Series Forecasting", slug: "time-series", status: "published", difficulty: "intermediate" },
          { title: "Recommendation Systems", slug: "recommendation-systems", status: "published", difficulty: "intermediate" },
        ],
      },
    ],
  },
  {
    title: "LLMs & Generative AI",
    slug: "llms",
    sections: [
      {
        title: "Tokenization & Representations",
        slug: "tokenization-representations",
        items: [
          { title: "Tokenizers: BPE, WordPiece, SentencePiece", slug: "tokenizers", status: "published", tier: "pro", difficulty: "intermediate" },
          { title: "Word & Token Embeddings", slug: "embeddings", status: "published", tier: "pro", difficulty: "intermediate" },
          { title: "Positional Encoding & RoPE", slug: "positional-encoding-rope", status: "published", tier: "pro", difficulty: "advanced" },
        ],
      },
      {
        title: "Training & Alignment",
        slug: "training-alignment",
        items: [
          { title: "Pretraining Objectives & Scaling Laws", slug: "pretraining-scaling-laws", status: "published", tier: "pro", difficulty: "advanced" },
          { title: "Supervised Fine-Tuning (SFT)", slug: "supervised-fine-tuning", status: "published", tier: "pro", difficulty: "intermediate" },
          { title: "RLHF: Reward Modeling & PPO", slug: "rlhf", status: "published", tier: "pro", difficulty: "expert" },
          { title: "Direct Preference Optimization (DPO)", slug: "dpo", status: "published", tier: "pro", difficulty: "advanced" },
          { title: "PEFT: LoRA & QLoRA", slug: "lora-qlora", status: "published", tier: "pro", difficulty: "advanced" },
        ],
      },
      {
        title: "Inference & Serving",
        slug: "inference-serving",
        items: [
          { title: "KV Cache & Attention at Inference", slug: "kv-cache", status: "published", tier: "pro", difficulty: "advanced" },
          { title: "FlashAttention", slug: "flash-attention", status: "published", tier: "pro", difficulty: "expert" },
          { title: "Quantization: INT8, GPTQ, AWQ", slug: "quantization", status: "published", tier: "pro", difficulty: "advanced" },
          { title: "Speculative Decoding", slug: "speculative-decoding", status: "published", tier: "pro", difficulty: "advanced" },
          { title: "Serving with vLLM & TensorRT-LLM", slug: "serving-vllm-tensorrt", status: "published", tier: "pro", difficulty: "advanced" },
        ],
      },
      {
        title: "Evaluation & Safety",
        slug: "evaluation-safety",
        items: [
          { title: "LLM Evaluation Methods & Benchmarks", slug: "llm-evaluation", status: "published", tier: "pro", difficulty: "intermediate" },
          { title: "Guardrails & Responsible AI", slug: "guardrails-responsible-ai", status: "published", tier: "pro", difficulty: "intermediate" },
          { title: "AI Alignment & Safety", slug: "ai-alignment-safety", status: "published", tier: "pro", difficulty: "advanced" },
        ],
      },
      {
        title: "Frontier Landscape",
        slug: "frontier-landscape",
        items: [
          { title: "The Frontier Model Landscape", slug: "frontier-model-landscape", status: "published", tier: "pro", difficulty: "intermediate" },
        ],
      },
    ],
  },
  {
    title: "Retrieval & Knowledge Systems",
    slug: "retrieval-knowledge",
    sections: [
      {
        title: "Retrieval-Augmented Generation",
        slug: "rag",
        items: [
          { title: "RAG: Architecture & Patterns", slug: "retrieval-augmented-generation", status: "published", difficulty: "intermediate" },
          { title: "Vector Databases & Similarity Search", slug: "vector-databases", status: "published", difficulty: "intermediate" },
          { title: "Hybrid Search & Reranking", slug: "hybrid-search-reranking", status: "published", difficulty: "advanced" },
          { title: "GraphRAG & Knowledge Graphs", slug: "graphrag-knowledge-graphs", status: "published", difficulty: "advanced" },
        ],
      },
    ],
  },
  {
    title: "Agentic AI",
    slug: "agents",
    sections: [
      {
        title: "Agent Architectures",
        slug: "architectures",
        items: [
          { title: "Reasoning, Planning & Tool Calling", slug: "reasoning-planning-tool-calling", status: "published", tier: "pro", difficulty: "advanced" },
          { title: "Agent Memory Systems", slug: "agent-memory", status: "published", tier: "pro", difficulty: "advanced" },
          { title: "Multi-Agent Systems", slug: "multi-agent-systems", status: "published", tier: "pro", difficulty: "advanced" },
        ],
      },
      {
        title: "Protocols & Frameworks",
        slug: "protocols-frameworks",
        items: [
          { title: "Model Context Protocol (MCP)", slug: "model-context-protocol", status: "published", tier: "pro", difficulty: "intermediate" },
          { title: "Agent2Agent Protocol (A2A)", slug: "agent2agent-protocol", status: "published", tier: "pro", difficulty: "intermediate" },
          { title: "LangChain & LangGraph", slug: "langchain-langgraph", status: "published", tier: "pro", difficulty: "intermediate" },
          { title: "CrewAI & AutoGen", slug: "crewai-autogen", status: "published", tier: "pro", difficulty: "intermediate" },
        ],
      },
    ],
  },
  {
    title: "MLOps & Systems",
    slug: "mlops",
    sections: [
      {
        title: "Production ML",
        slug: "production-ml",
        items: [
          { title: "Feature Engineering & Feature Stores", slug: "feature-engineering", status: "published", tier: "pro", difficulty: "intermediate" },
          { title: "Experiment Tracking (MLflow, W&B)", slug: "experiment-tracking", status: "published", tier: "pro", difficulty: "beginner" },
          { title: "ML Pipelines & Orchestration", slug: "ml-pipelines", status: "published", tier: "pro", difficulty: "intermediate" },
          { title: "Model Serving & Deployment", slug: "model-serving", status: "published", tier: "pro", difficulty: "advanced" },
          { title: "Monitoring & Observability", slug: "monitoring-observability", status: "published", tier: "pro", difficulty: "advanced" },
          { title: "Docker, Kubernetes & CI/CD for ML", slug: "docker-kubernetes-cicd", status: "published", tier: "pro", difficulty: "intermediate" },
        ],
      },
      {
        title: "Cloud & Big Data",
        slug: "cloud-big-data",
        items: [
          { title: "AWS for ML (SageMaker, Bedrock)", slug: "aws-for-ml", status: "published", tier: "pro", difficulty: "intermediate" },
          { title: "Azure & GCP ML Platforms", slug: "azure-gcp-ml", status: "published", tier: "pro", difficulty: "intermediate" },
          { title: "Databricks & Spark", slug: "databricks-spark", status: "published", tier: "pro", difficulty: "intermediate" },
          { title: "Snowflake for ML Workloads", slug: "snowflake-ml", status: "published", tier: "pro", difficulty: "intermediate" },
        ],
      },
    ],
  },
  {
    title: "Career & Practice",
    slug: "practice",
    sections: [
      {
        title: "Interview Preparation",
        slug: "interview-prep",
        items: [
          { title: "ML System Design", slug: "ml-system-design", status: "published", tier: "pro", difficulty: "advanced" },
          { title: "Coding Problems for ML/DS", slug: "coding-problems", status: "published", tier: "pro", difficulty: "intermediate" },
          { title: "Case Studies", slug: "case-studies", status: "published", tier: "pro", difficulty: "intermediate" },
        ],
      },
      {
        title: "Reference",
        slug: "reference",
        items: [
          { title: "Glossary", slug: "glossary", status: "published", tier: "pro", difficulty: "beginner" },
          { title: "Timeline of AI", slug: "timeline-of-ai", status: "published", tier: "pro", difficulty: "beginner" },
          { title: "Cheat Sheets", slug: "cheat-sheets", status: "published", tier: "pro", difficulty: "beginner" },
        ],
      },
    ],
  },
];

export const flatNavItems = navigation.flatMap((group) =>
  group.sections.flatMap((section) =>
    section.items.map((item) => ({
      ...item,
      groupTitle: group.title,
      groupSlug: group.slug,
      sectionTitle: section.title,
      sectionSlug: section.slug,
      href: `/docs/${group.slug}/${section.slug}/${item.slug}`,
    })),
  ),
);
