import { useState, useEffect } from "react";

export default function ButtonMenu({ toggleMenu }) {
  const [color, setColor] = useState('white')
  //   function handleClick(e) {
  //     e.preventDefault();
  //     toggleMenu(true);
  //   }
  const changeColor = () => {
    // Generate a random color
    const randomColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    // Set the background color of the button to the random color
    return randomColor

  };

  useEffect(()=>{
    setColor(changeColor())
  }, [])

  return (
    <div>
      <div className="p-1">
        <button
          className="w-12 h-12 rounded-full  hover:bg-teal-700 text-white shadow-lg"
          onClick={toggleMenu}
          style={{background: color}}
        ></button>
      </div>
    </div>
  );
}
