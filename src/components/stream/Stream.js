import React, { useState, useRef } from 'react';
import { gpt3 } from '../brains/gpt3'
import * as acorn from 'acorn';

function HomePage({setNewNodes, setNewEdges}) {
    const [output, setOutput] = useState('');
    const inputRef = useRef(null);

    const handleSubmit = async () => {
        const inputValue = inputRef.current.value;
        console.log("dude!", inputValue)


        try {
            console.log("in")
            // Send a POST request to the API endpoint with the input data
            const response = await gpt3(inputValue)
            //fetch('/api/createGraph_api', {
            //     method: 'POST',
            //     headers: {
            //       'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ input: inputValue }),
            //   });

            console.log("response", response)
            // Get the response text
            //   const data = await response.text();

            //   console.log('data,', data)

            // Set the output state with the response data
            setOutput(response.toString());

            // eval(response.toString());

            const ast = acorn.parse(response, { ecmaVersion: 'latest' });
            const nodesDeclaration = ast.body.find(node => node.type === 'VariableDeclaration' && node.declarations[0].id.name === 'nodes');
            const edgesDeclaration = ast.body.find(node => node.type === 'VariableDeclaration' && node.declarations[0].id.name === 'edges');
            
            function reconstructObject(node) {
              if (node.type === 'ObjectExpression') {
                const obj = {};
                for (const property of node.properties) {
                  obj[property.key.name] = reconstructObject(property.value);
                }
                return obj;
              } else if (node.type === 'ArrayExpression') {
                return node.elements.map(element => reconstructObject(element));
              } else if (node.type === 'Literal') {
                return node.value;
              }
            }
            
            const nodes = reconstructObject(nodesDeclaration.declarations[0].init);
            const edges = reconstructObject(edgesDeclaration.declarations[0].init);


            console.log("nodes", nodes);
            console.log("edges", edges);

            setNewNodes(nodes)
            setNewEdges(edges)
            
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
                <h1 className="text-2xl mb-4">API Output</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        ref={inputRef}
                        className="border rounded py-2 px-3 w-full"
                    />
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 text-white py-2 px-4 ml-2 rounded"
                    >
                        Submit0000
                    </button>
                </div>
                <div className="border rounded p-4 bg-gray-200">
                    <pre className="whitespace-pre-wrap">{output}</pre>
                </div>
            </div>
        </div>
    );
}

export default HomePage;



// import * as acorn from 'acorn';

// const outputString = `const nodes = [
//   {
//     id: '1',
//     data: {
//       label: 'Java Source Code',
//     },
//     position: { x: 100, y: 100 },
//   },
//   // ...
// ];

// const edges = [
//   { id: 'e1-2', source: '1', target: '2', label: 'is processed by' },
//   // ...
// ];`;

// const ast = acorn.parse(outputString, { ecmaVersion: 'latest' });
// const nodesDeclaration = ast.body.find(node => node.type === 'VariableDeclaration' && node.declarations[0].id.name === 'nodes');
// const edgesDeclaration = ast.body.find(node => node.type === 'VariableDeclaration' && node.declarations[0].id.name === 'edges');

// const nodes = nodesDeclaration.declarations[0].init.elements;
// const edges = edgesDeclaration.declarations[0].init.elements;
