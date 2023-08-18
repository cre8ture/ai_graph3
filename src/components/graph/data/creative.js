// import Project_node_norm from "../node_types/project_node_norm";
import Project_node_norm from "../node_types/Project_node_norm";
import { Position } from "reactflow";

// const nodeDefaults = {
//   sourcePosition: Position.right,
//   targetPosition: Position.left,
// };

export const creative_nodes = [
  {
    id: "creative_header",
    type: "project_node_norm",
    position: { x: 1100, y: 2100 },
    data: {
      title: "Other",
      description: "",
      isConnectable: true,
      link: "",
    },
    // ...nodeDefaults,
  },
  {
    id: "AWS Serverless Lambda Function",
    type: "project_node_norm",
    position: { x: 400, y: 2000 },
    data: {
      title: "AWS Serveless Lambda Function",
      description:
        "Presentation on AWS Lambda Functions for Cloud Computing Harvard Course",
      isConnectable: true,
      link: "https://drive.google.com/file/d/11L8JMoiMj0ARg_u6SyLzST2WAxO-NoCv/view?usp=sharing",
    },
    // ...nodeDefaults,
  },

  {
    id: "Creature in the City",
    type: "project_node_norm",
    position: { x: 1000, y: 2300 },
    data: {
      title: "Creature in the City",
      description: "Solo performance of my work at Roulette in Brooklyn",
      isConnectable: true,
      link: "https://www.youtube.com/watch?v=f1UOvrAfUaQ&t=39s",
    },
    // ...nodeDefaults,
  },
  {
    id: "Impossible Dance",
    type: "project_node_norm",
    position: { x: 400, y: 2300 },
    data: {
      title: "Impossible Dance",
      description: "Improvisation based on Melinda Ring's Impossible Dance",
      isConnectable: true,
      link: "https://vimeo.com/148194108?utm_campaign=5250933&utm_source=affiliate&utm_channel=affiliate&cjevent=95f2658e2e4411ee809202310a82b82a&clickid=95f2658e2e4411ee809202310a82b82a",
    },
    // ...nodeDefaults,
  },
  {
    id: "Creature on the Dock",
    type: "project_node_norm",
    position: { x: 620, y: 1770 },
    data: {
      title: "Creature on the Dock",
      description: "Creature series on a dock in Vermont",
      isConnectable: true,
      link: "https://www.youtube.com/watch?v=EkU9oVNoBqQ",
    },
    // ...nodeDefaults,
  },
  {
    id: "Endless Loop",
    type: "project_node_norm",
    position: { x: 1020, y: 1770 },
    data: {
      title: "Endless Loop",
      description: "Creature series Endless Loop at Judson Memorial Church",
      isConnectable: true,
      link: "https://www.youtube.com/watch?v=Ocw_3ksBj0U&list=UUcllGY-SS0MDaRfZQhI3pAA&index=57",
    },
    // ...nodeDefaults,
  },

  {
    id: "Creature on the Porch",
    type: "project_node_norm",
    position: { x: 1420, y: 1770 },
    data: {
      title: "Creature on the Porch",
      description: "Creature series on a porch in Vermont with Brubeck",
      isConnectable: true,
      link: "https://www.youtube.com/watch?v=irEwoGN6I-s&t=103s",
    },
    // ...nodeDefaults,
  },

  {
    id: "atrain",
    type: "project_node_norm",
    position: { x: 1420, y: 2070 },
    data: {
      title: "atrain",
      description: "Creature series at the NY Transit Museum",
      isConnectable: true,
      link: "https://vimeo.com/97986774",
    },
    // ...nodeDefaults,
  },
];

export const creative_edges = [
  {
    id: "creative_edge1",
    source: "creative_header",
    // sourceHandle: "source_left"
    sourceHandle: "top_source",
    targetHandle: "right_target",
    // sourcePosition: Position.Right,
    // targetPosition: Position.Left,
    target: "AWS Serveless Lambda Function",
  },
  {
    id: "creative_edge21",
    source: "creative_header",
    // sourceHandle: "source_bottom",
    sourceHandle: "left_source",
    targetHandle: "right_target",
    target: "AWS Serverless Lambda Function",
  },
  {
    id: "creative_edge2",
    source: "creative_header",
    // sourceHandle: "source_bottom",
    sourceHandle: "top_source",
    targetHandle: "bottom_target",
    target: "Creature on the Porch",
  },
  {
    id: "creative_edge3",
    source: "creative_header",
    // sourceHandle: "source_left",
    sourceHandle: "bottom_source",
    targetHandle: "top_target",
    target: "Creature in the City",
  },
  // {
  //   id: "creative_edge4",
  //   source: "creative_header",
  //   // sourceHandle: "source_left",
  //   sourceHandle: "bottom_source",
  //   targetHandle: "top_target",
  //   target: "VitGan",
  // },
  {
    id: "dcreative_edge5",
    source: "creative_header",
    // sourceHandle: "source_left",
    sourceHandle: "bottom_source",
    targetHandle: "top_target",
    target: "Impossible Dance",
  },
  {
    id: "creative_edge6",
    source: "creative_header",
    // sourceHandle: "source_left",
    sourceHandle: "left_source",
    targetHandle: "bottom_target",
    target: "Creature on the Dock",
  },
  {
    id: "creative_edge7",
    source: "creative_header",
    // sourceHandle: "source_left",
    sourceHandle: "top_source",
    targetHandle: "bottom_target",
    target: "Endless Loop",
  },
  {
    id: "creative_edge8",
    source: "creative_header",
    // sourceHandle: "source_left",
    sourceHandle: "right_source",
    targetHandle: "left_target",
    target: "atrain",
  },
];

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = {
  project_node_norm: Project_node_norm,
};
