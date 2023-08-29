// pages/api/chat.js
import { NextResponse } from 'next/server';
import Cors from 'cors';
// import { OpenAI } from 'langchain/llms/openai';
// import { LLMChain } from 'langchain/chains';
// import { initializeAgentExecutorWithOptions } from "langchain/agents";
// import { ChatOpenAI } from "langchain/chat_models/openai";




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

const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_KEY;


// const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY'; // Replace with your own API key
// const prompt = 'Your prompt here';

const key = OPENAI_API_KEY 
async function fetchGPT3(prompt) {
    const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        prompt: prompt,
        max_tokens: 150
      })
    });
  
    const data = await response.json();
    return data.choices[0].text;
  }
  
//   fetchGPT3(prompt).then(response => console.log(response));


// const chat = new ChatOpenAI({ 
//   modelName: "gpt-4", 
//   temperature: 0.9,
//   apiKey: ""
// });

// const executor = await initializeAgentExecutorWithOptions([], chat, {
//   agentType: "openai-functions",
//   verbose: true,
// });



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

export default async function handler(req) {
//   await runMiddleware(req, req.nextUrl, cors);

  try {
    // if (!OPENAI_API_KEY) {
    //   throw new Error('OPENAI_API_KEY is not defined.');
    // }

    const input = 'text: ' + req.body.text + ` \n` + prompt_main
    if (req.method === 'POST') {
    //   const result = await executor.run('text: ' + req.body.text + ` \n` + prompt_main);
    //   console.log(result);

    const result = await fetchGPT3(input)

      return NextResponse.json({ result });
    } else {
      return NextResponse.notFound();
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
