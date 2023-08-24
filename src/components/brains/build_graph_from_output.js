// import {gpt3_expand_node} from './gpt3_expand_node'
import * as acorn from 'acorn';


export async function build_graph_from_output(response) {
    // const response = await gpt3_expand_node(output.label, output.x, output.y)

    //   setOutput(await response.toString());

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


      // console.log("nodes", nodes);
      // console.log("edges", edges);

      return {
        "nodes": nodes,
        "edges: edges
      }
    }