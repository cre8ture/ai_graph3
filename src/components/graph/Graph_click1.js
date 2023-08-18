// import { edtech_nodes, edtech_edges } from "./EdTech_Musings";
import { How_To_Node } from "./node_types/How_To_Node";
import { Heading_Node } from "./node_types/Heading_Node";
import ResizeableNode from "./node_types/ResizeableNode";
import Project_node_cool from "./node_types/Project_node_cool";
import Project_node_norm from "./node_types/Project_node_norm";
import { edtech_nodes2, edtech_edges2 } from "./data/edtech";
import { mindfulness_nodes, mindfulness_edges } from "./data/mindfulness";
import { deep_learning_nodes, deep_learning_edges } from "./data/ai";
import { llms_nodes, llms_edges } from "./data/llms";
import { creative_nodes, creative_edges } from "./data/creative";

import CustomControls from "./controls/Controls";

// import { heading_nodes } from "./data/headings";

import React, { useCallback, useState, useRef } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
  // from orig
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
} from "reactflow";
import "reactflow/dist/style.css";

// NODES`
import TextUpdaterNode from "./TextUpdaterNode.js";
import Project_node from "./Project_node.js";
import New_node from "./node_types/new_node";

const initialNodes = [
  {
    id: "node_2_info",
    type: "Heading_Node",
    position: { x: 500, y: -150 },
    data: { value: 123 },
  },

  {
    id: "node_1_info",
    type: "default",
    className: "annotation",
    data: {
      label: (
        <>
          <div className="text-updater-node text-left font-mono p-1">
            <p className="font-semibold">How to use this graph</p>
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
            </p>
          </div>
        </>
      ),
    },
    draggable: true,
    selectable: true,
    position: { x: 0, y: 0 },
  },
];
const initialEdges = [];

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = {
  How_To_Node: How_To_Node,
  Heading_Node: Heading_Node,
  textUpdater: TextUpdaterNode,
  projectNode: Project_node,
  new_node: New_node,
  new_node_resize: ResizeableNode,
  project_node_norm: Project_node_norm,
  // Project_node_cool: Project_node_cool,
};

let id = 1;
const getId = () => `${id++}`;

// const fitViewOptions = {
//   padding: 3,
// };

const AddNodeOnEdgeDrop = ({ setIsClearGraph }) => {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  //   const onInit = (instance) => setReactFlowInstance(instance);
  const [nodes, setNodes, onNodesChange] = useNodesState([
    ...initialNodes,
    // ...edtech_nodes,
    ...mindfulness_nodes,
    ...edtech_nodes2,
    ...deep_learning_nodes,
    ...llms_nodes,
    ...creative_nodes,
    // ...heading_nodes,

    // ...info_nodes,
  ]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([
    ...initialEdges,
    // ...edtech_edges,
    ...mindfulness_edges,
    ...edtech_edges2,
    ...deep_learning_edges,
    ...llms_edges,
    ...creative_edges,
  ]);

  const { project } = useReactFlow();
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback(
    (event) => {
      const targetIsPane = event.target.classList.contains("react-flow__pane");

      if (targetIsPane) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
        const id = getId();
        const newNode = {
          id,
          type: "new_node_resize",
          // we are removing the half of the node width (75) to center the new node
          position: project({
            x: event.clientX - left - 75,
            y: event.clientY - top,
          }),
          data: { label: `Node ${id}` },
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({ id, source: connectingNodeId.current, target: id })
        );
      }
    },
    [project]
  );

  //   for new new nodes being made
  const newNodeWidth = 100;
  const newNodeHeight = 360;

  // new nodes on clicking
  const handlePaneClick = useCallback(
    (event) => {
      if (event.detail === 2) {
        const position = project({
          //   const position = project({
          x: event.clientX,
          y: event.clientY,
        });
        console.log("i am position", position);
        const newNode = {
          id: event.timeStamp.toString(),
          // type: "default",
          type: "new_node_resize",
          // position,
          position: {
            x: position.x - newNodeWidth / 2,
            y: position.y - newNodeHeight / 2,
          },
          // data: { label: "New Node" },
          data: { value: 224 },
        };
        setNodes((prevData) => [...prevData, newNode]);
      }
    },
    [project]
  );

  function getClickPosition(event, canvas) {
    const canvasRect = canvas.getBoundingClientRect();
    const x = event.clientX - canvasRect.left;
    const y = event.clientY - canvasRect.top;
    return { x, y };
  }
  const fitViewOptions = {
    padding: 500, // Adjust the padding value as needed
    includeHiddenNodes: true, // Optional: Whether to include hidden nodes when fitting the view
  };

  return (
    // <div style={{ width: "100vw", height: "100vh" }}>
    <div
      className="wrapper text-xl text-mono"
      ref={reactFlowWrapper}
      style={{ width: "100vw", height: "100vh" }}
    >
      <ReactFlow
        fitView={fitViewOptions}
        nodes={nodes}
        edges={edges}
        elements={nodes}
        // onLoad={onLoad}
        // onInit={onInit}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        // fitView
        // fitViewOptions={fitViewOptions}
        zoomOnDoubleClick={false}
        onPaneClick={handlePaneClick}
        // style={rfStyle} // light blue background
        nodeTypes={nodeTypes}
      >
        {/* <Controls /> */}
        <CustomControls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
        {/* <Background
          id="1"
          gap={10}
          color="#f1f1f1"
          variant={BackgroundVariant.Lines}
        />
        <Background
          id="2"
          gap={100}
          offset={1}
          color="#ccc"
          variant={BackgroundVariant.Lines}
        /> */}
      </ReactFlow>
    </div>
    // </div>
  );
};

// AddNodeOnEdgeDrop.displayName = "AddNodeOnEdgeDrop"; // Add this line to set the display name

// export default () => (
//   <ReactFlowProvider>
//     <AddNodeOnEdgeDrop />
//   </ReactFlowProvider>
// );

const MyComponent = () => (
  <ReactFlowProvider>
    <AddNodeOnEdgeDrop />
  </ReactFlowProvider>
);
MyComponent.displayName = "MyComponent";
export default MyComponent;
