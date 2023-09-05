import React, {useEffect,  useCallback, memo, useState } from 'react';
import { Handle, useStore, useNodesState, useEdgesState  } from 'reactflow';
import {gpt3_expand_node} from '../../brains/gpt3_expand_node'
import {build_graph_from_output} from '../../brains/build_graph_from_output'
import {Loading} from '../../loading/Loading'

const nodes2 = [
  {
id: 'new-node-id',
type: 'special', // Use the custom node type defined earlier
position: { x: 100, y: 100 },
data: { label: 'New Node' },
},]
// Add new edge
const edges2=
[{
id: 'new-edge-id',
source: 'source-node-id',
target: 'new-node-id',
},]

const CustomNode = ({ id, data, selected, handleSubmit }) => {
  const [clicked, setClicked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // const setElements = useStoreState((store) => store.setElements);
  // const [nodes3, setNodes, onNodesChange] = useNodesState();
  // const [edges3, setEdges, onEdgesChange] = useEdgesState();
  
  const store = useStore();
  const isDragging = store //.getState().nodesDraggable; // i need to understand what this contains 
  const nodes = isDragging.getNodes()
  // const nodes = store.getState().getNodes();
  const node = nodes.find((node) => node.id === id);
  // console.log("i is node", node)

  const label = node.data.label
  const posX = node.position.x
  const posY = node.position.y


  useEffect(() => {
    async function updateNodes(newN, newE)
    {
      handleSubmit(newN, newE)
    }
    
  }, [])
  
const setNodesSelector = (state) => state.setNodes;
const setEdgesSelector = (state) => state.setEdges;

  const setNodes = useStore(setNodesSelector);
  const setEdges = useStore(setEdgesSelector);


  const handleClick = useCallback(async () => {

    console.log(`Node ${id} was clicked!`);

    // Fetch data from an API
    if(!clicked){
    setIsLoading(true)
    console.log("i am clicked and inside clicker")
    const response = await gpt3_expand_node(label, posX, posY, id)
    console.log("response", response);  

    // const data = await response.json();
    // console.log(data);  
    const graphData = await build_graph_from_output(response)
    setClicked(true)
    // console.log("i am graphData MOOO", isDragging.setNodes())
    // isDragging.setNodes((nodes) => [...nodes, ...nodes2]) // graphData.nodes])
    // isDragging.setEdges((edges) => [
    //   ...edges, ...edges2 //graphData.edges
    //   // Add new edges here
    // ]);

    // isDragging.setNodes([...nodes2]) // graphData.nodes])
    // isDragging.setNodes((nds) => nds.concat(...nodes2));
    // isDragging.setEdges((eds) =>
    //       eds.concat({ ...edges2})
    //     );
    // isDragging.setEdges([...edges2]);

    
  // set nodes array
  // setNodes([
  //   { id: 'node-1', type: 'default', position: { x: 0, y: 0 }, data: { value: 123 } },
  //   { id: 'node-2', type: 'default', position: { x: 100, y: 100 }, data: { label: 'Hello' } },
  // ]);

  // // set edges array
  // setEdges([
  //   { id: 'edge-1', source: 'node-1', target: 'node-2' },
  // ]);
  const newEdges = [...isDragging.edges, ...graphData.edges]
  const newNodes = [...nodes, ...graphData.nodes]

  // console.log("about to submit")
  // await handleSubmit(newNodes, newEdges)

  console.log("newNodes")
  setNodes(newNodes)
  // setNodes((prevNodes) => [...prevNodes, ...graphData.nodes])
  setEdges(newEdges)
  // setEdges((prevEdges) => [...prevEdges, ...graphData.edges])
  console.log("cs", isDragging, "poop" , isDragging.getNodes())





    setIsLoading(false)
   

}

  }, [id]);

  
  return (
    <div
      // onClick={handleClick}
      className={`p-5 rounded-md bg-blue-300 shadow-md transition-colors duration-300 hover:bg-blue-500 hover:scale-110 focus:bg-blue-700`}   >
      
      <Handle type="target" position="top" style={{ height: '10px', width: '10px', backgroundColor: '#000' }} />
      <div>{data.label}</div>
      <Handle type="source" position="bottom" style={{ height: '10px', width: '10px', backgroundColor: '#000' }} />
    </div>
  );
};

export default memo(CustomNode);
