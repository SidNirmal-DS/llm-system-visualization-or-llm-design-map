'use client';
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

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

// Moved nodes and links data directly into this file to resolve import error
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


export default function Diagram() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Clear previous render to prevent duplicates on re-renders
    svg.selectAll('*').remove();

    // Get the actual dimensions of the SVG container
    const width = 1200; // Fixed width for viewBox, actual display scales via CSS
    const height = 1000; // Fixed height for viewBox, actual display scales via CSS

    // Create a wrapper <g> element for all graph elements, allowing easy zoom/pan
    const container = svg.append('g');

    // --- Zoom and Pan functionality ---
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3]) // Allow zooming from 30% to 300%
      .on('zoom', (event) => {
        container.attr('transform', event.transform);
      });

    svg.call(zoom as any); // Apply zoom behavior to the SVG

    // --- Force Simulation Setup ---
    // Initialize node positions for stability
    nodes.forEach(node => {
      if (!(node as any).x) (node as any).x = width / 2 + (Math.random() - 0.5) * 100;
      if (!(node as any).y) (node as any).y = height / 2 + (Math.random() - 0.5) * 100;
    });

    const simulation = d3.forceSimulation(nodes as any)
      .force('link', d3.forceLink(links).id((d: any) => d.id).distance(150)) // Increased distance
      .force('charge', d3.forceManyBody().strength(-1000)) // Stronger repulsion for better spread
      .force('collide', d3.forceCollide().radius(d => {
        // Dynamic collision radius based on node type for better spacing
        if (d.group === 'central') return 35; // Larger central node
        if (d.group === 'pillar') return 25; // Pillar nodes
        return 18; // Pattern nodes
      }).iterations(2)) // Increased iterations for better collision resolution
      .force('center', d3.forceCenter(width / 2, height / 2)) // Center the graph
      .force('x', d3.forceX(width / 2).strength(0.05)) // Weak force to pull towards horizontal center
      .force('y', d3.forceY(height / 2).strength(0.05)); // Weak force to pull towards vertical center

    // --- Draw Links ---
    const link = container.append('g')
      .attr('stroke', '#94a3b8') // Lighter grey for links
      .attr('stroke-width', 1.5)
      .selectAll('line')
      .data(links)
      .enter().append('line');

    // --- Draw Nodes (Circles and Labels grouped together) ---
    const nodeGroup = container.append('g')
      .selectAll('g')
      .data(nodes)
      .enter().append('g')
      .call(d3.drag<SVGGElement, any>() // Apply drag behavior to the group
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended)
      );

    // Append circles to node groups
    nodeGroup.append('circle')
      .attr('r', d => {
        if (d.group === 'central') return 20; // Central node is largest
        if (d.group === 'pillar') return 12; // Pillar nodes are medium
        return 8; // Pattern nodes are smallest
      })
      .attr('fill', d => {
        if (d.group === 'central') return '#dc2626'; // Red for central
        if (d.group === 'pillar') return '#f97316'; // Orange for pillars
        return '#2563eb'; // Blue for patterns
      });

    // Append labels to node groups
    nodeGroup.append('text')
      .text(d => d.id)
      .style('font-size', d => d.group === 'central' ? '15px' : '12px') // Adjust font size
      .style('font-family', 'Inter, sans-serif') // Use Inter font
      .style('font-weight', d => d.group === 'central' || d.group === 'pillar' ? 'bold' : 'normal') // Bold for central and pillars
      .style('pointer-events', 'none') // Prevents text from blocking mouse events on circle
      .attr('fill', '#111')
      .attr('text-anchor', 'middle') // Center text horizontally
      .attr('dy', '0.35em') // Center text vertically
      .attr('x', d => {
        // Offset text slightly for better readability, especially for smaller nodes
        if (d.group === 'central') return 0;
        if (d.group === 'pillar') return 0; // Center text for pillars
        return 0; // Center text for patterns
      })
      .attr('y', d => {
        // Position text below or within circle based on size
        if (d.group === 'central') return 0; // Centered for central
        if (d.group === 'pillar') return 0; // Centered for pillars
        return 0; // Centered for patterns
      })
      .style('text-shadow', '1px 1px 0 rgba(255,255,255,0.8), -1px -1px 0 rgba(255,255,255,0.8), 1px -1px 0 rgba(255,255,255,0.8), -1px 1px 0 rgba(255,255,255,0.8)'); // Text shadow for readability


    // --- Simulation Tick Function ---
    simulation.on('tick', () => {
      // Update link positions
      link
        .attr('x1', d => (d.source as any).x)
        .attr('y1', d => (d.source as any).y)
        .attr('x2', d => (d.target as any).x)
        .attr('y2', d => (d.target as any).y);

      // Update node group positions (which contains both circle and text)
      nodeGroup.attr('transform', d => `translate(${(d as any).x}, ${(d as any).y})`);
    });

    // --- Drag Behavior Functions ---
    function dragstarted(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: any, d: any) {
      d.fx = event.x;
      d.fy = d.y;
    }

    function dragended(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null; // Release fixed position
      d.fy = null; // Release fixed position
    }

  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="flex justify-center items-center h-screen w-full p-4">
      <svg
        ref={svgRef}
        // Set viewBox to fixed dimensions so content scales within the container
        viewBox="0 0 1200 1000"
        // Use Tailwind classes for responsive sizing and styling
        className="w-full h-full max-w-full max-h-full bg-white border border-gray-300 rounded-lg shadow-lg"
      >
        {/* D3 content will be rendered here */}
      </svg>
    </div>
  );
}
