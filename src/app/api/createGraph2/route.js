import { NextResponse } from 'next/server';
import Cors from 'cors';
import { OpenAI } from 'langchain/llms/openai';
import { LLMChain } from 'langchain/chains';
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";

const prompt_main = `create a React Flow graph that is a flow chart for the text below where nodes represent key ideas outputted as  const nodes =  [{
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
  { id: 'e1-3', source: 'n-1', target: 'n', animated: true }, where anmated : true is based on the logic of the relationship. Ensure each node is at least 300 pixels apart. Only output the code in your response.`

const OPENAI_API_KEY = process.env.OPENAI_KEY;

// const model = new OpenAI({
//   openAIApiKey: OPENAI_API_KEY,
//   modelName: 'gpt-3.5-turbo',
//   temperature: 0.9,
//   streaming: true,
// });


const chat = new ChatOpenAI({
    modelName: "gpt-4",
    temperature: 0.9,
    apiKey: OPENAI_API_KEY // Place your OpenAI key here
});

const executor = await initializeAgentExecutorWithOptions([], chat, {
    agentType: "openai-functions",
    verbose: true,
});

// var chain = new LLMChain({ llm: model, prompt });
// var chain = new LLMChain({ llm: model });


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
    const res = await request.json()
    return NextResponse.json({ res })
    console.log("request")
    await runMiddleware(request, request.nextUrl, cors);

    console.log("heyyyy", request)
    try {
        if (!OPENAI_API_KEY) {
            throw new Error('OPENAI_API_KEY is not defined.');
        }

        const result = await executor.run('text: ' + request.body.text + ` \n` + prompt_main);
        console.log(result);
        return NextResponse.json({ result })
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