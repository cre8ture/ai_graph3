// import Project_node_norm from "../node_types/project_node_norm";
import Project_node_norm from "../node_types/Project_node_norm";
import { Position } from "reactflow";

// const nodeDefaults = {
//   sourcePosition: Position.right,
//   targetPosition: Position.left,
// };

export const deep_learning_nodes = [
  {
    id: "deep_learning_header",
    type: "project_node_norm",
    position: { x: 800, y: 1200 },
    data: {
      title: "Deep Learning",
      description: "",
      isConnectable: true,
      link: "",
    },
    // ...nodeDefaults,
  },
  {
    id: "Fine Tuning GPT",
    type: "project_node_norm",
    position: { x: 200, y: 900 },
    data: {
      title: "Fine Tuning GPT-2",
      description: "Fine tuning a GPT-2 model to write sone lyrics",
      isConnectable: true,
      link: "https://vercel.com/cre8ture/csb-7blsc9",
    },
    // ...nodeDefaults,
  },

  {
    id: "flood",
    type: "project_node_norm",
    position: { x: 200, y: 1100 },
    data: {
      title: "Convolutional Network Flooding",
      description: "CNN analyzing data to predict flooding in Ireland",
      isConnectable: true,
      link: "https://visualizing-mindfulness.vercel.app/  ",
    },
    // ...nodeDefaults,
  },
  {
    id: "EfficientNet",
    type: "project_node_norm",
    position: { x: 200, y: 1300 },
    data: {
      title: "EfficientNet",
      description:
        "A customized version of the paper, EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks",
      isConnectable: true,
      link: "https://cre8ture.github.io/wave-breathing/",
    },
    // ...nodeDefaults,
  },
  {
    id: "VitGan",
    type: "project_node_norm",
    position: { x: 620, y: 1470 },
    data: {
      title: "VitGAN",
      description:
        "Custom implementation of the paper, ViTGAN: Training GANs with Vision Transformers",
      isConnectable: true,
      link: "https://cre8ture.github.io/sunWaves/",
    },
    // ...nodeDefaults,
  },
  {
    id: "GANs with CNNs",
    type: "project_node_norm",
    position: { x: 1020, y: 1470 },
    data: {
      title: "GANs with CNNs",
      description:
        "Custom implementation of the paper, Generative Adversarial Networks",
      isConnectable: true,
      link: "https://cre8ture.github.io/sunWaves/",
    },
    // ...nodeDefaults,
  },
];

export const deep_learning_edges = [
  {
    id: "deep_learning_edge1",
    source: "deep_learning_header",
    // sourceHandle: "source_left"
    sourceHandle: "top_source",
    targetHandle: "right_target",
    // sourcePosition: Position.Right,
    // targetPosition: Position.Left,
    target: "Fine Tuning GPT",
  },
  {
    id: "deep_learning_edge2",
    source: "deep_learning_header",
    // sourceHandle: "source_bottom",
    sourceHandle: "left_source",
    targetHandle: "right_target",
    target: "flood",
  },
  {
    id: "deep_learning_edge3",
    source: "deep_learning_header",
    // sourceHandle: "source_left",
    sourceHandle: "left_source",
    targetHandle: "right_target",
    target: "EfficientNet",
  },
  {
    id: "deep_learning_edge4",
    source: "deep_learning_header",
    // sourceHandle: "source_left",
    sourceHandle: "bottom_source",
    targetHandle: "top_target",
    target: "VitGan",
  },
  {
    id: "deep_learning_edge5",
    source: "deep_learning_header",
    // sourceHandle: "source_left",
    sourceHandle: "bottom_source",
    targetHandle: "top_target",
    target: "GANs with CNNs",
  },
];

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = {
  project_node_norm: Project_node_norm,
};
