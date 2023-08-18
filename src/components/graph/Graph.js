import React, { useCallback } from "react";
import "reactflow/dist/style.css";
import { edtech_nodes, edtech_edges } from "./EdTech_Musings";
// import { info_nodes } from "./node_types/info_nodes";
import { How_To_Node } from "./node_types/How_To_Node";
import { Heading_Node } from "./node_types/Heading_Node";

// import "./text-updater-node.module.css";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
// NODES`
import TextUpdaterNode from "./TextUpdaterNode.js";
import Project_node from "./Project_node.js";
import New_node from "./node_types/new_node";

const rfStyle = {
  backgroundColor: "#B8CEFF",
};

const initialNodes = [
  {
    id: "node_2_info",
    type: "Heading_Node",
    position: { x: 500, y: 0 },
    data: { value: 123 },
  },
  {
    id: "node-1",
    type: "textUpdater",
    position: { x: 600, y: 620 },
    data: { value: 123 },
  },
  {
    id: "node-2",
    type: "projectNode",
    position: { x: 300, y: 320 },
    data: { value: 124 },
  },
  {
    id: "node_1_info",
    type: "default",
    className: "annotation",
    data: {
      label: (
        <>
          <p>🖥️ This is a selection of some of my experiments</p>
          <p>
            This website is completely editable. You can <strong>delete</strong>{" "}
            any node by selecting it and press backspace
          </p>
          <p>
            You can <strong> add your own nodes</strong> by double clicking
            anywhere
          </p>
          <p>Drag point indicators on a node to connect them</p>
          <p>
            {" "}
            Edit this page and <button>
              Click here to Download this Map
            </button>{" "}
          </p>
        </>
      ),
    },
    draggable: true,
    selectable: true,
    position: { x: 0, y: 0 },
  },
];
const initialEdges = [
  {
    id: "e1-2",
    source: "node_1_info",
    target: "node_2_info",
    sourceHandle: "bottom",
    targetHandle: "left",
  },
];

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = {
  How_To_Node: How_To_Node,
  Heading_Node: Heading_Node,
  textUpdater: TextUpdaterNode,
  projectNode: Project_node,
  new_node: New_node,
};

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([
    ...initialNodes,
    ...edtech_nodes,
    // ...info_nodes,
  ]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([
    ...initialEdges,
    ...edtech_edges,
  ]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const handlePaneClick = useCallback((event) => {
    if (event.detail === 2) {
      const canvas = document.querySelector(".react-flow__renderer");
      const position = getClickPosition(event, canvas);
      const newNode = {
        id: event.timeStamp.toString(),
        // type: "default",
        type: "textUpdater",
        position,
        // data: { label: "New Node" },
        data: { value: 224 },
      };
      setNodes((prevData) => [...prevData, newNode]);
    }
  }, []);

  function getClickPosition(event, canvas) {
    const canvasRect = canvas.getBoundingClientRect();
    const x = event.clientX - canvasRect.left;
    const y = event.clientY - canvasRect.top;
    return { x, y };
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onPaneClick={handlePaneClick}
        zoomOnDoubleClick={false}
        // style={rfStyle} // light blue background
        nodeTypes={nodeTypes}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}

App.displayName = "AddNodeOnEdgeDrop"; // Add this line to set the display name
