import ResizeableNode from "./node_types/ResizeableNode";
import ClickableNode from "./node_types/Clickable";
import Project_node_norm from "./node_types/Clickable";


// import CustomControls from "./controls/Controls";
import React, { useCallback, useEffect, useState, useRef } from "react";
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

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = {
  new_node_resize: ResizeableNode,

  Clickable: ClickableNode,

  // Project_node_cool: Project_node_cool,
};

let id = 1;
const getId = () => `${id++}`;

const AddNodeOnEdgeDrop = ({ setIsClearGraph, backgroundColor, newNodes, newEdges }) => {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [flowStyle, setFlowStyle] = useState({ background: backgroundColor });

  console.log("backgroundColor", backgroundColor);
  useEffect(() => {
    setFlowStyle({ background: backgroundColor });
  }, [backgroundColor]);

  //   const onInit = (instance) => setReactFlowInstance(instance);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(()=>{
    setNodes(newNodes)
    setEdges(newEdges)
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

  //   for new new nodes being made
  const newNodeWidth = 100;
  const newNodeHeight = 100;

  // new nodes on clicking
  const handlePaneClick = useCallback(
    (event) => {
      if (event.detail === 2) {
        const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
        const position = project({
          //   const position = project({
          x: event.clientX - left,
          y: event.clientY - top,
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

  const onLoad = (reactFlowInstance) => {
    reactFlowInstance.setTransform({ x: 0, y: 0, zoom: 1 });
  };

  return (
    // <div style={{ width: "100vw", height: "100vh" }}>
    <div
      className="wrapper text-xl text-mono"
      ref={reactFlowWrapper}
      style={{ width: "100vw", height: "100vh", background: "transparent" }}
    >
      <ReactFlow
        // fitView={fitViewOptions}
        nodes={nodes}
        edges={edges}
        elements={nodes}
        onLoad={onLoad}
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
        style={flowStyle}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
    // </div>
  );
};

const MyComponent = ({ backgroundColor, newNodes, newEdges }) => (
  <ReactFlowProvider newNodes={newNodes} newEdges={newEdges}>
    <div style={{ backgroundColor: "transparent" }}>
      <AddNodeOnEdgeDrop backgroundColor={backgroundColor}  newNodes={newNodes} newEdges={newEdges} />
    </div>
  </ReactFlowProvider>
);
MyComponent.displayName = "MyComponent";
export default MyComponent;
