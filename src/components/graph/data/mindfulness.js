// import Project_node_norm from "../node_types/project_node_norm";
import Project_node_norm from "../node_types/Project_node_norm";
import { Position } from "reactflow";

const nodeDefaults = {
  sourcePosition: Position.right,
  targetPosition: Position.left,
};

export const mindfulness_nodes = [
  {
    id: "mindfulness_header",
    type: "project_node_norm",
    position: { x: 700, y: 400 },
    data: {
      title: "Mindfulness",
      description: "",
      isConnectable: true,
      link: "",
    },
    ...nodeDefaults,
  },
  {
    id: "Mountain",
    type: "project_node_norm",
    position: { x: 200, y: 170 },
    data: {
      title: "Mountain",
      description: "Send your worries into the cloud and watch them dissipate",
      isConnectable: true,
      link: "https://vercel.com/cre8ture/csb-7blsc9",
    },
    ...nodeDefaults,
  },

  {
    id: "Visualizing Mindfulness",
    type: "project_node_norm",
    position: { x: 200, y: 350 },
    data: {
      title: "Visualizing Mindfulness",
      description: "Breathing animation and particles",
      isConnectable: true,
      link: "https://visualizing-mindfulness.vercel.app/  ",
    },
    ...nodeDefaults,
  },
  {
    id: "Breathing Waves",
    type: "project_node_norm",
    position: { x: 200, y: 500 },
    data: {
      title: "Breathing Waves",
      description: "Breathing with the arrow keys",
      isConnectable: true,
      link: "https://cre8ture.github.io/wave-breathing/",
    },
    ...nodeDefaults,
  },
  {
    id: "Sun Waves",
    type: "project_node_norm",
    position: { x: 620, y: 620 },
    data: {
      title: "Sun Waves",
      description: "Visual Creative relaxing house track visualizatiom",
      isConnectable: true,
      link: "https://cre8ture.github.io/sunWaves/",
    },
    ...nodeDefaults,
  },
];

export const mindfulness_edges = [
  {
    id: "mindfulness_edge2",
    source: "mindfulness_header",
    // sourceHandle: "source_left"
    sourceHandle: "top_source",
    targetHandle: "right_target",
    // sourcePosition: Position.Right,
    // targetPosition: Position.Left,
    target: "Mountain",
  },
  {
    id: "mindfulness_edge1",
    source: "mindfulness_header",
    // sourceHandle: "source_bottom",
    sourceHandle: "left_source",
    targetHandle: "right_target",
    target: "Visualizing Mindfulness",
  },
  {
    id: "mindfulness_edge3",
    source: "mindfulness_header",
    // sourceHandle: "source_left",
    sourceHandle: "left_source",
    targetHandle: "right_target",
    target: "Breathing Waves",
  },
  {
    id: "mindfulness_edge4",
    source: "mindfulness_header",
    // sourceHandle: "source_left",
    sourceHandle: "bottom_source",
    targetHandle: "top_target",
    target: "Sun Waves",
  },
];

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = {
  project_node_norm: Project_node_norm,
};
