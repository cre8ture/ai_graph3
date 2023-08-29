

import React, { useState, useEffect } from "react";

const ScaledInput = ({ isLoading, setIsHovered, setInputText}) => {
  const [padding, setPadding] = useState("p-3");
  const [input, setInput] = useState('');


  const handleMouseEnter = () => {
    setPadding("p-5");
    setIsHovered(true);
  };

  const handleMouseLeave = (event) => {
    setPadding("p-2");
    if (!event.target.value) {
      // If the input has a value, call setIsHovered with true
      setIsHovered(false);
    }
  };

  useEffect(()=> {
    console.log(isLoading)
    if(isLoading)
    {
      setInput('')
    }
  }, [isLoading])

  const handleChange = (event) => {
    // Check if the input has a value
    setInput(event.target.value)

    if (event.target.value) {


      setInputText(event.target.value)
      // If the input has a value, call setIsHovered with true
      setIsHovered(true);
    } else {
      // If the input is empty, call setIsHovered with false
      setIsHovered(false);
    }
  };

  return (
    <input
      className={`rounded-lg mt-3 ml-3 shadow-md transition-all duration-1000 transform hover:scale-120 focus:scale-120 ${padding}`}
      type="text"
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          console.log("Enter key pressed");
        }
      }
    }
      value={input}
      placeholder="Ask me anything"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onChange={handleChange}
    />
  );
};

export default ScaledInput;
