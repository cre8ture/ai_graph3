// import { NextResponse } from 'next/server';
// import type { NextApiRequest, NextApiResponse } from 'next'
// import Cors from 'cors'
// import { OpenAI } from "langchain/llms/openai";
// import { LLMChain } from "langchain/chains";
// import { PromptTemplate } from "langchain/prompts";

// import { VectorStoreRetrieverMemory } from "langchain/memory";
// import { OpenAIEmbeddings } from "langchain/embeddings/openai";
// import { MemoryVectorStore } from "langchain/vectorstores/memory";

// const prompt = new PromptTemplate({
//     inputVariables: ["text"],
//     template:  `text: {text}
//     create a React Flow graph that is a flow chart for the text above where nodes represent key ideas outputted as  const nodes =  [{
//        id: '1',
//        data: {
//          label: 'key idea 1',
//        },
//        position: { x: 100, y: 100 },
//      },... ,{
//        id: 'n',
//        data: {
//          label: 'key idea 1',
//        },
//        position: { x: n*3*100, y: 100 },
//      } ] and edges connect these nodes in logical order const edges = [
//      { id: 'e1-2', source: '1', target: '2', label: 'describe the relationship bewteen source '1' and target '2' },
//      { id: 'e1-3', source: 'n-1', target: 'n', animated: true }, where anmated : true is based on the logic of the relationship. Ensure each node is at least 300 pixels apart. Only output the code in your response.`
//   })


// const oneInputPrompt = `text: {text}
// create a React Flow graph that is a flow chart for the text above where nodes represent key ideas outputted as  const nodes =  [{
//    id: '1',
//    data: {
//      label: 'key idea 1',
//    },
//    position: { x: 100, y: 100 },
//  },... ,{
//    id: 'n',
//    data: {
//      label: 'key idea 1',
//    },
//    position: { x: n*3*100, y: 100 },
//  } ] and edges connect these nodes in logical order const edges = [
//  { id: 'e1-2', source: '1', target: '2', label: 'describe the relationship bewteen source '1' and target '2' },
//  { id: 'e1-3', source: 'n-1', target: 'n', animated: true }, where anmated : true is based on the logic of the relationship. Ensure each node is at least 300 pixels apart. Only output the code in your response.`



// const OPENAI_API_KEY = process.env.OPENAI_KEY;

// const vectorStore = new MemoryVectorStore(new OpenAIEmbeddings());

// const model = new OpenAI({ openAIApiKey: OPENAI_API_KEY, modelName: "gpt-3.5-turbo", temperature: 0.9, streaming: true })


// // var memory = new VectorStoreRetrieverMemory({
// //   vectorStoreRetriever: vectorStore.asRetriever(2),
// //   memoryKey: "history",
// // });





// // var chain = new LLMChain({ llm: model, prompt, memory });
// var chain = new LLMChain({ llm: model, prompt });


// const cors = Cors({
//   methods: ['POST', 'GET', 'HEAD'],
// })

// function runMiddleware(
//   req: NextApiRequest,
//   res: NextApiResponse,
//   fn: Function
// ) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result: any) => {
//       if (result instanceof Error) {
//         return reject(result)
//       }

//       return resolve(result)
//     })
//   })
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   await runMiddleware(req, res, cors)


//   try {
//     res.writeHead(200, {
//       "Content-Type": "application/octet-stream"
//       , "Transfer-Encoding": "chunked"
//     });

//     if (!OPENAI_API_KEY) {
//       throw new Error("OPENAI_API_KEY is not defined.");
//     }

//     console.log("I am in NOT CONDITIONAL API, req.body.new, req.body.person", req.body.isPersonChanged, req.body.person)

//     // Call the chain with the inputs and a callback for the streamed tokens
//     const result = await chain.call({ input: req.body.input }, [
//       {
//         handleLLMNewToken(token: string) {
//           res.write(token);
//         },
//       },
//     ]);


//     res.end();
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }

// }


import { NextResponse } from 'next/server';
import Cors from 'cors';
import { OpenAI } from 'langchain/llms/openai';
import { LLMChain } from 'langchain/chains';
import { PromptTemplate } from 'langchain/prompts';
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";

const prompt = new PromptTemplate({
  inputVariables: ['text'],
  template: `\n create a React Flow graph that is a flow chart for the text below where nodes represent key ideas outputted as  const nodes =  [{
       id: '1',
       data: {
         label: 'key idea 1',
       },
       position: { x: 100, y: 100 },
     },... ,{
       id: 'n',
       data: {
         label: 'key idea 1',
       },
       position: { x: n*3*100, y: 100 },
     } ] and edges connect these nodes in logical order const edges = [
     { id: 'e1-2', source: '1', target: '2', label: 'describe the relationship bewteen source '1' and target '2' },
     { id: 'e1-3', source: 'n-1', target: 'n', animated: true }, where anmated : true is based on the logic of the relationship. Ensure each node is at least 300 pixels apart. Only output the code in your response.`,
});

const prompt_main = `create a React Flow graph that is a flow chart for the text above where nodes represent key ideas outputted as const nodes =  [{{\n  id: '1',\n  data: {{\n    label: 'key idea 1',\n  }},\n  position: {{ x: 100, y: 100 }},\n}},... ,{{\n  id: 'n',\n  data: {{\n    label: 'key idea 1',\n  }},\n  position: {{ x: n*3*100, y: 100 }},\n}} ] and edges connect these nodes in logical order const edges = [\n{{\n  id: 'e1-2',\n  source: '1',\n  target: '2',\n  label: 'describe the relationship between source \'1\' and target \'2\'\n}},\n{{\n  id: 'e1-3',\n  source: 'n-1',\n  target: 'n',\n  animated: true\n}}\n] where animated : true is based on the logic of the relationship. Ensure each node is at least 300 pixels apart. Only output the code in your response.`

const OPENAI_API_KEY = process.env.OPENAI_KEY;

const model = new OpenAI({
  openAIApiKey: OPENAI_API_KEY,
  modelName: 'gpt-3.5-turbo',
  temperature: 0.9,
  streaming: true,
});


// const chat = new ChatOpenAI({ 
//   modelName: "gpt-4", 
//   temperature: 0.9,
//   apiKey: OPENAI_API_KEY // Place your OpenAI key here
// });

// const executor = await initializeAgentExecutorWithOptions([], chat, {
//   agentType: "openai-functions",
//   verbose: true,
// });

// var chain = new LLMChain({ llm: model, prompt });
var chain = new LLMChain({ llm: model });


const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
});

function runMiddleware(
  req, res, fn
  ) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export async function POST(request) {
  await runMiddleware(request, request.nextUrl, cors);
  console.log("butt plug")
  try {
    if (!OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not defined.');
    }

    // Create a new ReadableStream that streams the tokens
    const stream = new ReadableStream({
      async start(controller) {
        // Call the chain with the inputs and a callback for the streamed tokens
        await chain.call(
          { input: 'text: ' + request.body.text + ` \n` + prompt_main},
          [
            {
              handleLLMNewToken(token) {
                // Enqueue each token as it is generated
                controller.enqueue(token);
              },
            },
          ]
        );

        // Close the stream when all tokens have been generated
        controller.close();
      },
    });

    // Return a NextResponse object with the stream as the body
    return new NextResponse(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}





// import { initializeAgentExecutorWithOptions } from "langchain/agents";
// import { ChatOpenAI } from "langchain/chat_models/openai";

// const chat = new ChatOpenAI({ 
//   modelName: "gpt-4", 
//   temperature: 0,
//   apiKey: "YOUR_OPENAI_API_KEY" // Place your OpenAI key here
// });

// const executor = await initializeAgentExecutorWithOptions([], chat, {
//   agentType: "openai-functions",
//   verbose: true,
// });

// const result = await executor.run("Your input here");
// console.log(result);