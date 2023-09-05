const key = process.env.NEXT_PUBLIC_OPENAI_KEY 

export async function gpt3_expand_node(prompt, x_val, y_val, id_orig_node) {
  const new_y = y_val+200
  const prompt_main = `create a React Flow graph that is a flow chart for the text above where nodes represent key ideas outputted as const nodes =  [{
    id:'e_${id_orig_node}-1',
    type: 'Clickable',
    data: {
      label: 'key idea 1',
      id:'id:'e_${id_orig_node}-1''
    },
    position: { x: ${x_val}, y:${new_y},
  },
  id:'e_${id_orig_node}-2',
    type: 'Clickable',
    data: {
      label: 'key idea 2',
      id:'e_${id_orig_node}-2'
    },
    position: { x: ${x_val}, y: $y_2 },
  },
  ... ,{
    id: 'e_${id_orig_node}-n',
    type: 'Clickable',
    data: {
      label: 'key idea n', id:'n'
    },
    position: { x:x_val, y:y_n },
  } ] and edges connect these nodes in logical order, where the the source for the first edge is just ${id_orig_node}. const edges = [
    { id: 'e_ed_${id_orig_node}-1', source: '${id_orig_node}', target: 'e_${id_orig_node}-1', label: 'describe the relationship bewteen source '1' and target '2' },
  { id: 'e_ed_${id_orig_node}-2', source: 'e_${id_orig_node}-1', target: 'e_${id_orig_node}-2', label: 'describe the relationship bewteen source '1' and target '2' },
  ...., { id: 'e_ed_${id_orig_node}-n-1', source: 'n-1', target: 'e_${id_orig_node}-n', animated: true }, where animated: true is based on the logic of the relationship. The label logically describes the relationship between nodes. Ensure each node is at least 200  pixels apart along y axis; x axis stays the same for all nodes.  
  Output only pure javascript code in your response; nothing else.`;

   var original_prompt = ''
  
   try{
  original_prompt  = sessionStorage.getItem("ai_graph_input");
   }
   catch(e)
   {
    console.log("error fetching original prompt: ", e)
   }

   console.log("i am original prompt",original_prompt)
    // const input = `text: In the context of this original ${original_prompt}, describe in detail how to: ` + prompt + ` \n` + prompt_main;
    const input = `describe in detail how to: ` + prompt + ` \n` + prompt_main;


    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${key}`
        },
        body: JSON.stringify({
            "model": "gpt-4",
            // "model": "gpt-3.5-turbo",
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

    console.log(data)

    // console.log("i am thinking...", data)
    // console.log("DATA,", data, data.choices[0].message.content)//.message.content)
    return data.choices[0].message.content//.message.content;
}
