// import Project_node_norm from "../node_types/project_node_norm";
import Project_node_norm from "../node_types/Project_node_norm";
import { Position } from "reactflow";

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
};

export const edtech_nodes2 = [
  {
    id: "ed_header",
    type: "project_node_norm",
    position: { x: 1500, y: 400 },
    data: { title: "Ed Tech", description: "", isConnectable: true, link: "" },
    ...nodeDefaults,
  },
  {
    id: "bodyLITERATE",
    type: "project_node_norm",
    position: { x: 1600, y: 620 },
    data: {
      title: "bodyLITERATE",
      description: "Executive Functions coaching for students of all ages",
      isConnectable: true,
      link: "https://www.thebodyliterate.com/",
    },
    ...nodeDefaults,
  },
  {
    id: "Mosaic_essay",
    type: "project_node_norm",
    position: { x: 1700, y: 350 },
    data: {
      title: "Mosaic Essay",
      description:
        "Turn your essay into a series of images and then reorganize them",
      isConnectable: true,
      link: "https://aquamarine-sorbet-3ee281.netlify.app/",
    },
    ...nodeDefaults,
  },
  {
    id: "PDF_summarizer",
    type: "project_node_norm",
    position: { x: 1700, y: 150 },
    data: {
      title: "PDF Summarizer",
      description: "Automatically summarize a PDF and find key quotations",
      isConnectable: true,
      link: "https://scholar-8zcz.vercel.app/ ",
    },
    ...nodeDefaults,
  },
  {
    id: "StudyDuck",
    type: "project_node_norm",
    position: { x: 1150, y: 150 },
    data: {
      title: "StudyDuck",
      description: "Turn any textbook into a SparkNotes-like study set",
      isConnectable: true,
      link: "studyduck.io",
    },
    ...nodeDefaults,
  },
];

export const edtech_edges2 = [
  {
    id: "edtech_edge1",
    source: "ed_header",
    // sourceHandle: "source_bottom",
    sourceHandle: "bottom_source",
    targetHandle: "top_target",
    target: "bodyLITERATE",
  },
  {
    id: "edtech_edge2",
    source: "ed_header",
    // sourceHandle: "source_left"
    sourceHandle: "right_source",
    targetHandle: "left_target",
    // sourcePosition: Position.Right,
    // targetPosition: Position.Left,
    target: "Mosaic_essay",
  },
  {
    id: "edtech_edge3",
    source: "ed_header",
    // sourceHandle: "source_left",
    sourceHandle: "top_source",
    targetHandle: "left_target",
    target: "PDF_summarizer",
  },
  {
    id: "edtech_edge4",
    source: "ed_header",
    // sourceHandle: "source_left",
    sourceHandle: "top_source",
    targetHandle: "right_target",
    target: "StudyDuck",
  },
];

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = {
  project_node_norm: Project_node_norm,
};
