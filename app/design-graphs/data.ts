// data.ts

// Define interfaces for better type safety and readability
interface Node {
  id: string;
  label?: string; // Optional label if different from id
  group: string; // To categorize nodes (e.g., 'pillar', 'pattern', 'central')
  benefits?: string; // Key benefits for pattern nodes
  central?: boolean; // Indicates if it's a central node
}

interface Link {
  source: string;
  target: string;
}

export const nodes: Node[] = [
  // Level 0: Central Node
  { id: 'LLM System Design', group: 'central', central: true },

  // Level 1: Primary Pillars (Categories)
  { id: 'Data Foundation', group: 'pillar' },
  { id: 'Training and Efficiency', group: 'pillar' },
  { id: 'Quality and Alignment', group: 'pillar' },
  { id: 'Reasoning and Problem Solving', group: 'pillar' },
  { id: 'Knowledge Integration (RAG)', group: 'pillar' },
  { id: 'Agentic AI', group: 'pillar' },

  // Level 2: Design Patterns / Techniques (with benefits)
  { id: 'Data cleaning', group: 'pattern', benefits: 'Higher quality insights; more accurate predictions; faster model iteration; reduced bias in outcomes.' },
  { id: 'Data augmentation', group: 'pattern', benefits: 'More reliable and generalizable models; improved performance in diverse situations; greater resilience to noisy data.' },
  { id: 'Handling large datasets', group: 'pattern', benefits: 'Ability to extract deeper insights; higher performance potential; broader range of applications; more robust models.' },
  { id: 'Data versioning', group: 'pattern', benefits: 'Increased confidence in results; easier debugging and auditing; reduced risk of data corruption; faster recovery from errors; improved data-driven decision making.' },
  { id: 'Dataset annotation', group: 'pattern', benefits: 'More precise and effective models; faster learning rates; better alignment with desired outcomes.' },

  { id: 'Robust training pipelines', group: 'pattern', benefits: 'Faster model development; more consistent results; reduced manual effort; higher productivity.' },
  { id: 'Hyperparameter tuning', group: 'pattern', benefits: 'Optimized model performance; higher accuracy; faster training convergence; more efficient resource utilization.' },
  { id: 'Regularization techniques', group: 'pattern', benefits: 'More stable and generalizable models; reduced risk of overfitting; improved performance on unseen data.' },
  { id: 'Reliable checkpointing', group: 'pattern', benefits: 'Reduced risk of losing progress; faster experimentation; improved model development workflows.' },
  { id: 'Task-specific fine-tuning', group: 'pattern', benefits: 'Significantly improved performance on target tasks; faster time to market; more efficient use of resources.' },
  { id: 'Model pruning', group: 'pattern', benefits: 'Faster inference speeds; reduced storage requirements; lower computational costs; enabling deployment on resource-constrained devices.' },
  { id: 'Quantization', group: 'pattern', benefits: 'Reduced model size; accelerated inference; lower computational costs (leading to deployment on resource-constrained devices).' },

  { id: 'Rigorous evaluation metrics', group: 'pattern', benefits: 'Data-driven decision making; improved model selection; better understanding of model strengths and weaknesses.' },
  { id: 'Cross-validation', group: 'pattern', benefits: 'More reliable performance estimates; reduced risk of overfitting; improved model generalization.' },
  { id: 'Interpretability', group: 'pattern', benefits: 'Increased trust in model predictions; easier identification of errors; improved model understanding; facilitates debugging and refinement.' },
  { id: 'Fairness and bias mitigation', group: 'pattern', benefits: 'More equitable and ethical outcomes; reduced risk of discrimination; increased user trust.' },
  { id: 'Adversarial robustness', group: 'pattern', benefits: 'Enhanced security; improved reliability in unpredictable environments; protection against malicious attacks.' },
  { id: 'Reinforcement Learning from Human Feedback', group: 'pattern', benefits: 'Models aligned with human values; improved user experience; increased safety and trustworthiness.' },

  { id: 'Chain-of-thought', group: 'pattern', benefits: 'Enhanced problem-solving abilities; improved accuracy; increased transparency in decision-making.' },
  { id: 'Tree-of-thoughts', group: 'pattern', benefits: 'Improved ability to handle complex and ambiguous problems; more robust solutions.' },
  { id: 'ReAct', group: 'pattern', benefits: 'Ability to solve real-world problems effectively; improved adaptability; enhanced learning and reasoning.' },
  { id: 'Reasoning WithOut Observation', group: 'pattern', benefits: 'Enhanced problem-solving in data-scarce environments; improved decision-making with incomplete information.' },
  { id: 'Reflection techniques', group: 'pattern', benefits: 'More self-aware and reliable models; improved accuracy; enhanced learning and adaptation.' },
  { id: 'Automatic multi-step reasoning', group: 'pattern', benefits: 'Ability to solve complex tasks autonomously; increased efficiency; reduced need for human intervention.' },

  { id: 'Retrieval-augmented generation', group: 'pattern', benefits: 'Access to up-to-date information; reduced reliance on pre-trained knowledge; improved accuracy and relevance.' },
  { id: 'Graph-based RAG', group: 'pattern', benefits: 'More sophisticated reasoning; improved accuracy in complex knowledge domains; enhanced understanding of relationships.' },
  { id: 'Advanced RAG techniques', group: 'pattern', benefits: 'Higher quality and more relevant information; improved accuracy and reliability of results.' },
  { id: 'Evaluating RAG systems', group: 'pattern', benefits: 'Optimized RAG systems; greater user satisfaction; higher quality outcomes.' },

  { id: 'Agentic patterns', group: 'pattern', benefits: 'Ability to create autonomous systems; increased efficiency; reduced human intervention; enabling new applications.' },
];

export const links: Link[] = [
  // Links from the Central Node to Primary Pillars
  { source: 'LLM System Design', target: 'Data Foundation' },
  { source: 'LLM System Design', target: 'Training and Efficiency' },
  { source: 'LLM System Design', target: 'Quality and Alignment' },
  { source: 'LLM System Design', target: 'Reasoning and Problem Solving' },
  { source: 'LLM System Design', target: 'Knowledge Integration (RAG)' },
  { source: 'LLM System Design', target: 'Agentic AI' },

  // Links from Categories to their respective Design Patterns
  { source: 'Data Foundation', target: 'Data cleaning' },
  { source: 'Data Foundation', target: 'Data augmentation' },
  { source: 'Data Foundation', target: 'Handling large datasets' },
  { source: 'Data Foundation', target: 'Data versioning' },
  { source: 'Data Foundation', target: 'Dataset annotation' },

  { source: 'Training and Efficiency', target: 'Robust training pipelines' },
  { source: 'Training and Efficiency', target: 'Hyperparameter tuning' },
  { source: 'Training and Efficiency', target: 'Regularization techniques' },
  { source: 'Training and Efficiency', target: 'Reliable checkpointing' },
  { source: 'Training and Efficiency', target: 'Task-specific fine-tuning' },
  { source: 'Training and Efficiency', target: 'Model pruning' },
  { source: 'Training and Efficiency', target: 'Quantization' },

  { source: 'Quality and Alignment', target: 'Rigorous evaluation metrics' },
  { source: 'Quality and Alignment', target: 'Cross-validation' },
  { source: 'Quality and Alignment', target: 'Interpretability' },
  { source: 'Quality and Alignment', target: 'Fairness and bias mitigation' },
  { source: 'Quality and Alignment', target: 'Adversarial robustness' },
  { source: 'Quality and Alignment', target: 'Reinforcement Learning from Human Feedback' },

  { source: 'Reasoning and Problem Solving', target: 'Chain-of-thought' },
  { source: 'Reasoning and Problem Solving', target: 'Tree-of-thoughts' },
  { source: 'Reasoning and Problem Solving', target: 'ReAct' },
  { source: 'Reasoning and Problem Solving', target: 'Reasoning WithOut Observation' },
  { source: 'Reasoning and Problem Solving', target: 'Reflection techniques' },
  { source: 'Reasoning and Problem Solving', target: 'Automatic multi-step reasoning' },

  { source: 'Knowledge Integration (RAG)', target: 'Retrieval-augmented generation' },
  { source: 'Knowledge Integration (RAG)', target: 'Graph-based RAG' },
  { source: 'Knowledge Integration (RAG)', target: 'Advanced RAG techniques' },
  { source: 'Knowledge Integration (RAG)', target: 'Evaluating RAG systems' },

  { source: 'Agentic AI', target: 'Agentic patterns' },
];
