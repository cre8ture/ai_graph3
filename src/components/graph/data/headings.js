// import Project_node_norm from "../node_types/project_node_norm";
import Project_node_cool from "../node_types/Project_node_cool";
import { Position } from "reactflow";

const nodeDefaults = {
  sourcePosition: Position.right,
  targetPosition: Position.left,
};

export const heading_nodes = [
  {
    id: "hello",
    type: "Project_node_cool",
    position: { x: 500, y: -30 },
    // draggable: true,
    // selectable: true,
    data: {
      title:
        "Hello, I'm Kai Kleinbard, a technologist working at the intersection of somatics and artificial intelligence",
      description:
        "This is graph highlights a few of my projects from 2023. You can edit or clear this graph and remake it as your own.",
      isConnectable: true,
      buttons: [
        {
          title: "Contact Me",
          link: "mailto:bakukai@gmail.com",
        },
      ],
    },
    ...nodeDefaults,
  },
  {
    id: "Directions",
    type: "Project_node_cool",
    position: { x: 200, y: 170 },
    // draggable: true,
    // selectable: true,
    data: {
      title: "Mountain",
      description: (
        <>
          <p>
            This graph is completely editable. You can <strong>delete</strong>{" "}
            any node by selecting it and press backspace
          </p>
          <p>
            <strong>add edges to nodes</strong> by dragging the connection
            points anywhere
          </p>
          <p>
            You can <strong> add your own nodes</strong> by double clicking
            anywhere
          </p>
          <p>
            <strong> Dowbload</strong> by pressing the{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Reset Graph
                </button>
          </p>
        </>
      ),
      isConnectable: true,
      buttons: [
        {
          title: "Clear Graph",
          link: "/clean_graph",
        },
      ],
    },
    ...nodeDefaults,
  },
];

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = {
  Project_node_cool: Project_node_cool,
};
