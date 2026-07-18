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
          { title: "Vectors & Vector Spaces", slug: "vectors-vector-spaces", status: "planned", difficulty: "beginner" },
          { title: "Matrices & Matrix Operations", slug: "matrices-operations", status: "planned", difficulty: "beginner" },
          { title: "Eigenvalues & Eigenvectors", slug: "eigenvalues-eigenvectors", status: "published", difficulty: "intermediate" },
          { title: "Singular Value Decomposition (SVD)", slug: "svd", status: "planned", difficulty: "advanced" },
          { title: "Principal Component Analysis — Derivation", slug: "pca-derivation", status: "planned", difficulty: "advanced" },
          { title: "Matrix Calculus", slug: "matrix-calculus", status: "planned", difficulty: "advanced" },
          { title: "Norms & Distances", slug: "norms-distances", status: "planned", difficulty: "beginner" },
        ],
      },
      {
        title: "Calculus & Optimization",
        slug: "calculus-optimization",
        items: [
          { title: "Derivatives, Gradients & Jacobians", slug: "derivatives-gradients-jacobians", status: "planned", difficulty: "beginner" },
          { title: "Chain Rule & Backpropagation Derivation", slug: "backpropagation-derivation", status: "published", difficulty: "advanced" },
          { title: "Gradient Descent — Derivation & Variants", slug: "gradient-descent", status: "planned", difficulty: "intermediate" },
          { title: "Convex Optimization", slug: "convex-optimization", status: "planned", difficulty: "advanced" },
          { title: "Lagrange Multipliers & KKT Conditions", slug: "lagrange-kkt", status: "planned", difficulty: "advanced" },
          { title: "Numerical Methods & Stability", slug: "numerical-methods", status: "planned", difficulty: "intermediate" },
        ],
      },
      {
        title: "Probability & Statistics",
        slug: "probability-statistics",
        items: [
          { title: "Probability Foundations", slug: "probability-foundations", status: "planned", difficulty: "beginner" },
          { title: "Random Variables & Distributions", slug: "random-variables-distributions", status: "planned", difficulty: "beginner" },
          { title: "Maximum Likelihood Estimation", slug: "maximum-likelihood-estimation", status: "planned", difficulty: "intermediate" },
          { title: "Bayesian Statistics & Inference", slug: "bayesian-statistics", status: "planned", difficulty: "advanced" },
          { title: "Markov Chains & Monte Carlo (MCMC)", slug: "markov-chains-monte-carlo", status: "planned", difficulty: "advanced" },
          { title: "Expectation-Maximization Algorithm", slug: "expectation-maximization", status: "planned", difficulty: "advanced" },
          { title: "Hypothesis Testing & Confidence Intervals", slug: "hypothesis-testing", status: "planned", difficulty: "intermediate" },
        ],
      },
      {
        title: "Information Theory",
        slug: "information-theory",
        items: [
          { title: "Entropy & Cross-Entropy", slug: "entropy-cross-entropy", status: "planned", difficulty: "intermediate" },
          { title: "KL Divergence & Mutual Information", slug: "kl-divergence-mutual-information", status: "planned", difficulty: "intermediate" },
          { title: "Fisher Information", slug: "fisher-information", status: "planned", difficulty: "advanced" },
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
          { title: "Linear & Logistic Regression", slug: "linear-logistic-regression", status: "planned", difficulty: "beginner" },
          { title: "Naive Bayes", slug: "naive-bayes", status: "planned", difficulty: "beginner" },
          { title: "K-Nearest Neighbors", slug: "k-nearest-neighbors", status: "planned", difficulty: "beginner" },
          { title: "Decision Trees & Random Forests", slug: "decision-trees-random-forests", status: "planned", difficulty: "intermediate" },
          { title: "Gradient Boosting: XGBoost, LightGBM, CatBoost", slug: "gradient-boosting", status: "published", difficulty: "advanced" },
          { title: "Support Vector Machines", slug: "support-vector-machines", status: "planned", difficulty: "intermediate" },
        ],
      },
      {
        title: "Unsupervised & Self-Supervised Learning",
        slug: "unsupervised-learning",
        items: [
          { title: "Clustering (K-Means, DBSCAN, Hierarchical)", slug: "clustering", status: "planned", difficulty: "intermediate" },
          { title: "Dimensionality Reduction (t-SNE, UMAP)", slug: "dimensionality-reduction", status: "planned", difficulty: "intermediate" },
          { title: "Anomaly & Outlier Detection", slug: "anomaly-detection", status: "planned", difficulty: "intermediate" },
          { title: "Self-Supervised Learning", slug: "self-supervised-learning", status: "planned", difficulty: "advanced" },
        ],
      },
      {
        title: "Reinforcement Learning",
        slug: "reinforcement-learning",
        items: [
          { title: "Markov Decision Processes", slug: "markov-decision-processes", status: "planned", difficulty: "intermediate" },
          { title: "Q-Learning & Value-Based Methods", slug: "q-learning", status: "planned", difficulty: "intermediate" },
          { title: "Policy Gradients & Actor-Critic", slug: "policy-gradients-actor-critic", status: "planned", difficulty: "advanced" },
          { title: "PPO & Trust Region Methods", slug: "ppo-trust-region", status: "planned", difficulty: "advanced" },
        ],
      },
      {
        title: "Model Evaluation & Selection",
        slug: "evaluation",
        items: [
          { title: "Bias-Variance Tradeoff", slug: "bias-variance-tradeoff", status: "planned", difficulty: "beginner" },
          { title: "Cross-Validation Strategies", slug: "cross-validation", status: "planned", difficulty: "beginner" },
          { title: "Classification & Regression Metrics", slug: "metrics", status: "planned", difficulty: "beginner" },
          { title: "Hyperparameter Optimization & Bayesian Search", slug: "hyperparameter-optimization", status: "planned", difficulty: "intermediate" },
          { title: "Ensemble Learning: Bagging, Boosting, Stacking", slug: "ensemble-learning", status: "planned", difficulty: "intermediate" },
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
          { title: "Perceptrons & Multilayer Perceptrons", slug: "perceptrons-mlp", status: "planned", difficulty: "beginner" },
          { title: "Activation Functions", slug: "activation-functions", status: "planned", difficulty: "beginner" },
          { title: "Weight Initialization & Normalization", slug: "initialization-normalization", status: "planned", difficulty: "intermediate" },
          { title: "Optimizers: SGD, Momentum, Adam, AdamW", slug: "optimizers", status: "planned", difficulty: "intermediate" },
        ],
      },
      {
        title: "Convolutional & Vision Architectures",
        slug: "vision-architectures",
        items: [
          { title: "Convolutional Neural Networks", slug: "cnn", status: "planned", difficulty: "intermediate" },
          { title: "ResNet, DenseNet & EfficientNet", slug: "resnet-densenet-efficientnet", status: "planned", difficulty: "advanced" },
          { title: "U-Net for Segmentation", slug: "unet", status: "planned", difficulty: "advanced" },
          { title: "Vision Transformers (ViT)", slug: "vision-transformers", status: "planned", difficulty: "advanced" },
          { title: "YOLO Object Detection Family", slug: "yolo", status: "planned", difficulty: "advanced" },
          { title: "CLIP & Multimodal Vision-Language Models", slug: "clip", status: "planned", difficulty: "advanced" },
          { title: "Segment Anything (SAM)", slug: "segment-anything", status: "planned", difficulty: "advanced" },
        ],
      },
      {
        title: "Sequence Models",
        slug: "sequence-models",
        items: [
          { title: "RNNs, LSTMs & GRUs", slug: "rnn-lstm-gru", status: "planned", difficulty: "intermediate" },
          { title: "Seq2Seq & Encoder-Decoder Models", slug: "seq2seq", status: "planned", difficulty: "intermediate" },
        ],
      },
      {
        title: "Attention & Transformers",
        slug: "attention-transformers",
        items: [
          { title: "The Transformer Architecture", slug: "transformer-architecture", status: "published", difficulty: "advanced" },
          { title: "Self-Attention & Multi-Head Attention", slug: "self-attention-multi-head", status: "planned", difficulty: "advanced" },
          { title: "BERT & Encoder-Only Models", slug: "bert", status: "planned", difficulty: "advanced" },
          { title: "GPT & Decoder-Only Models", slug: "gpt-decoder-only", status: "planned", difficulty: "advanced" },
          { title: "T5 & Encoder-Decoder LLMs", slug: "t5", status: "planned", difficulty: "advanced" },
        ],
      },
      {
        title: "Generative Models",
        slug: "generative-models",
        items: [
          { title: "Variational Autoencoders (VAEs)", slug: "vae", status: "planned", difficulty: "advanced" },
          { title: "Generative Adversarial Networks (GANs)", slug: "gan", status: "planned", difficulty: "advanced" },
          { title: "Diffusion Models & Stable Diffusion", slug: "diffusion-models", status: "planned", difficulty: "expert" },
        ],
      },
      {
        title: "Graphs, MoE & Modern Sequence Architectures",
        slug: "modern-architectures",
        items: [
          { title: "Graph Neural Networks", slug: "graph-neural-networks", status: "planned", difficulty: "advanced" },
          { title: "Mixture of Experts (MoE)", slug: "mixture-of-experts", status: "planned", difficulty: "expert" },
          { title: "State Space Models: Mamba & RWKV", slug: "state-space-models", status: "planned", difficulty: "expert" },
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
          { title: "Computer Vision", slug: "computer-vision", status: "planned", difficulty: "intermediate" },
          { title: "Natural Language Processing", slug: "natural-language-processing", status: "planned", difficulty: "intermediate" },
          { title: "Speech AI (ASR & TTS)", slug: "speech-ai", status: "planned", difficulty: "advanced" },
          { title: "Time Series Forecasting", slug: "time-series", status: "planned", difficulty: "intermediate" },
          { title: "Recommendation Systems", slug: "recommendation-systems", status: "planned", difficulty: "intermediate" },
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
          { title: "Tokenizers: BPE, WordPiece, SentencePiece", slug: "tokenizers", status: "planned", difficulty: "intermediate" },
          { title: "Word & Token Embeddings", slug: "embeddings", status: "planned", difficulty: "intermediate" },
          { title: "Positional Encoding & RoPE", slug: "positional-encoding-rope", status: "published", difficulty: "advanced" },
        ],
      },
      {
        title: "Training & Alignment",
        slug: "training-alignment",
        items: [
          { title: "Pretraining Objectives & Scaling Laws", slug: "pretraining-scaling-laws", status: "planned", difficulty: "advanced" },
          { title: "Supervised Fine-Tuning (SFT)", slug: "supervised-fine-tuning", status: "planned", difficulty: "intermediate" },
          { title: "RLHF: Reward Modeling & PPO", slug: "rlhf", status: "planned", difficulty: "expert" },
          { title: "Direct Preference Optimization (DPO)", slug: "dpo", status: "planned", difficulty: "advanced" },
          { title: "PEFT: LoRA & QLoRA", slug: "lora-qlora", status: "published", difficulty: "advanced" },
        ],
      },
      {
        title: "Inference & Serving",
        slug: "inference-serving",
        items: [
          { title: "KV Cache & Attention at Inference", slug: "kv-cache", status: "planned", difficulty: "advanced" },
          { title: "FlashAttention", slug: "flash-attention", status: "planned", difficulty: "expert" },
          { title: "Quantization: INT8, GPTQ, AWQ", slug: "quantization", status: "planned", difficulty: "advanced" },
          { title: "Speculative Decoding", slug: "speculative-decoding", status: "planned", difficulty: "advanced" },
          { title: "Serving with vLLM & TensorRT-LLM", slug: "serving-vllm-tensorrt", status: "planned", difficulty: "advanced" },
        ],
      },
      {
        title: "Evaluation & Safety",
        slug: "evaluation-safety",
        items: [
          { title: "LLM Evaluation Methods & Benchmarks", slug: "llm-evaluation", status: "planned", difficulty: "intermediate" },
          { title: "Guardrails & Responsible AI", slug: "guardrails-responsible-ai", status: "planned", difficulty: "intermediate" },
          { title: "AI Alignment & Safety", slug: "ai-alignment-safety", status: "planned", difficulty: "advanced" },
        ],
      },
      {
        title: "Frontier Landscape",
        slug: "frontier-landscape",
        items: [
          { title: "The Frontier Model Landscape", slug: "frontier-model-landscape", status: "published", difficulty: "intermediate" },
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
          { title: "Vector Databases & Similarity Search", slug: "vector-databases", status: "planned", difficulty: "intermediate" },
          { title: "Hybrid Search & Reranking", slug: "hybrid-search-reranking", status: "planned", difficulty: "advanced" },
          { title: "GraphRAG & Knowledge Graphs", slug: "graphrag-knowledge-graphs", status: "planned", difficulty: "advanced" },
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
          { title: "Reasoning, Planning & Tool Calling", slug: "reasoning-planning-tool-calling", status: "planned", difficulty: "advanced" },
          { title: "Agent Memory Systems", slug: "agent-memory", status: "planned", difficulty: "advanced" },
          { title: "Multi-Agent Systems", slug: "multi-agent-systems", status: "planned", difficulty: "advanced" },
        ],
      },
      {
        title: "Protocols & Frameworks",
        slug: "protocols-frameworks",
        items: [
          { title: "Model Context Protocol (MCP)", slug: "model-context-protocol", status: "published", difficulty: "intermediate" },
          { title: "Agent2Agent Protocol (A2A)", slug: "agent2agent-protocol", status: "planned", difficulty: "intermediate" },
          { title: "LangChain & LangGraph", slug: "langchain-langgraph", status: "planned", difficulty: "intermediate" },
          { title: "CrewAI & AutoGen", slug: "crewai-autogen", status: "planned", difficulty: "intermediate" },
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
          { title: "Feature Engineering & Feature Stores", slug: "feature-engineering", status: "planned", difficulty: "intermediate" },
          { title: "Experiment Tracking (MLflow, W&B)", slug: "experiment-tracking", status: "planned", difficulty: "beginner" },
          { title: "ML Pipelines & Orchestration", slug: "ml-pipelines", status: "planned", difficulty: "intermediate" },
          { title: "Model Serving & Deployment", slug: "model-serving", status: "planned", difficulty: "advanced" },
          { title: "Monitoring & Observability", slug: "monitoring-observability", status: "planned", difficulty: "advanced" },
          { title: "Docker, Kubernetes & CI/CD for ML", slug: "docker-kubernetes-cicd", status: "planned", difficulty: "intermediate" },
        ],
      },
      {
        title: "Cloud & Big Data",
        slug: "cloud-big-data",
        items: [
          { title: "AWS for ML (SageMaker, Bedrock)", slug: "aws-for-ml", status: "planned", difficulty: "intermediate" },
          { title: "Azure & GCP ML Platforms", slug: "azure-gcp-ml", status: "planned", difficulty: "intermediate" },
          { title: "Databricks & Spark", slug: "databricks-spark", status: "planned", difficulty: "intermediate" },
          { title: "Snowflake for ML Workloads", slug: "snowflake-ml", status: "planned", difficulty: "intermediate" },
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
          { title: "ML System Design", slug: "ml-system-design", status: "planned", difficulty: "advanced" },
          { title: "Coding Problems for ML/DS", slug: "coding-problems", status: "planned", difficulty: "intermediate" },
          { title: "Case Studies", slug: "case-studies", status: "planned", difficulty: "intermediate" },
        ],
      },
      {
        title: "Reference",
        slug: "reference",
        items: [
          { title: "Glossary", slug: "glossary", status: "planned", difficulty: "beginner" },
          { title: "Timeline of AI", slug: "timeline-of-ai", status: "planned", difficulty: "beginner" },
          { title: "Cheat Sheets", slug: "cheat-sheets", status: "planned", difficulty: "beginner" },
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
