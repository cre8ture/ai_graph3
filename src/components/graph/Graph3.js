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
import CustomControls from "./controls/Controls";

// import { heading_nodes } from "./data/headings";

import React, { useCallback, useRef, useEffect } from "react";
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
    id: '1',
    data: {
      label: 'Light energy',
    },
    position: { x: 100, y: 100 },
  },
  {
    id: '2',
    data: {
      label: 'Chlorophyll',
    },
    position: { x: 400, y: 100 },
  },
  {
    id: '3',
    data: {
      label: 'Light-dependent reactions',
    },
    position: { x: 700, y: 100 },
  },
  {
    id: '4',
    data: {
      label: 'ATP and NADPH',
    },
    position: { x: 1000, y: 100 },
  },
  {
    id: '5',
    data: {
      label: 'Calvin Cycle (Light-independent reactions)',
    },
    position: { x: 1300, y: 100 },
  },
  {
    id: '6',
    data: {
      label: 'Glucose',
    },
    position: { x: 1600, y: 100 },
  }
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', label: 'Absorbed by' },
  { id: 'e2-3', source: '2', target: '3', label: 'Triggers' },
  { id: 'e3-4', source: '3', target: '4', label: 'Produces' },
  { id: 'e4-5', source: '4', target: '5', label: 'Powers' },
  { id: 'e5-6', source: '5', target: '6', label: 'Produces' }
];

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

const fitViewOptions = {
  padding: 3,
};

const AddNodeOnEdgeDrop = ({ newNodes, newEdges }) => {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);

  const [nodes, setNodes, onNodesChange] = useNodesState([
    ...initialNodes,
  ]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([
    ...initialEdges,
  ]);

  console.log("newNodes, newEdges MOO",  newNodes, newEdges)

  useEffect(() => {

    // if (newNodes && newNodes.length > 0) {
      setNodes(newNodes)

      setEdges(newEdges)

      console.log('we is creating some new ass stink', newNodes, newEdges)
    // }
  }, [newNodes, newEdges])
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

  // new nodes on clicking
  const handlePaneClick = useCallback((event) => {
    if (event.detail === 2) {
      const canvas = document.querySelector(".react-flow__renderer");
      const position = getClickPosition(event, canvas);
      const newNode = {
        id: event.timeStamp.toString(),
        // type: "default",
        type: "new_node_resize",
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
    // <div style={{ width: "100vw", height: "100vh" }}>
    <div
      className="wrapper text-xl text-mono"
      ref={reactFlowWrapper}
      style={{ width: "100vw", height: "100vh" }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        // fitView
        fitViewOptions={fitViewOptions}
        zoomOnDoubleClick={false}
        onPaneClick={handlePaneClick}
        // style={rfStyle} // light blue background
        nodeTypes={nodeTypes}
      >
        {/* <Controls /> */}
        <CustomControls />
        <MiniMap />
        {/* <Background variant="dots" gap={12} size={1} /> */}
        <Background
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
        />
      </ReactFlow>
    </div>
    // </div>
  );
};



const MyComponent = ({ newNodes, newEdges}) => (
  <ReactFlowProvider newNodes={newNodes} newEdges={newEdges}>
    <AddNodeOnEdgeDrop  newNodes={newNodes} newEdges={newEdges} />
  </ReactFlowProvider>
);
MyComponent.displayName = "MyComponent";
export default MyComponent;