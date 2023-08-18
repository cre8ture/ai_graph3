const key = process.env.NEXT_PUBLIC_OPENAI_KEY 
const prompt_main = `create a React Flow graph that is a flow chart for the text above where nodes represent key ideas outputted as  const nodes =  [{
    id:'1',
    type: 'Clickable',
    data: {
      label: 'key idea 1',
      id:'1'
    },
    position: { x: 100, y: 100 },
  },... ,{
    id: 'n',
    type: 'Clickable',
    data: {
      label: 'key idea 2', id:'n'

    },
    position: { x: n*3*100, y: 100 },
  } ] and edges connect these nodes in logical order const edges = [
  { id: 'e1-2', source: '1', target: '2', label: 'describe the relationship bewteen source '1' and target '2' },
  { id: 'e1-3', source: 'n-1', target: 'n', animated: true }, where animated : true is based on the logic of the relationship. The label logically describes the relationship between nodes. Ensure each node is at least 300 pixels apart.  Output only pure code in your response; nothing else.`;

export async function gpt3(prompt) {
    const input = 'text: ' + prompt + ` \n` + prompt_main;
    console.log("key", key)

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${key}`
        },
        body: JSON.stringify({
            // "model": "gpt-4",
            "model": "gpt-3.5-turbo",
            "messages": [
              {
                "role": "user",
                "content": input
              }
            ],
            "temperature": 0,
            "max_tokens": 2048,
            "top_p": 1,
            "frequency_penalty": 0
        })
    });

    const data = await response.json();

    console.log("i am thinking...", data)
    // console.log("DATA,", data, data.choices[0].message.content)//.message.content)
    return data.choices[0].message.content//.message.content;
}
