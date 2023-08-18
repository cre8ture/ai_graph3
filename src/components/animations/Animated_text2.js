"use client";
import React, { useEffect } from "react";

const FallingTextComponent = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const elements = document.querySelectorAll(".falling-text p");

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const bottomOfWindow = window.innerHeight + window.pageYOffset;

        // const elementLeft = element.getBoundingClientRect().left;
        // console.log(
        //   "elementTop = ",
        //   elementTop,
        //   "window.innerHeight = ",
        //   window.innerHeight
        // );
        if (elementTop <= 0) {
          // The element is above the viewer's window
          // console.log("i am scroll left");
          element.style.transform = "translateX(-1000px)";
        } else if (elementTop >= window.innerHeight) {
          // The element is below the viewer's window
          element.style.transform = "translateX(1000px)";
          // console.log("i am scroll right");
        } else {
          // console.log("I AM IN WINDOW!");
          element.style.transform = "translateX(10px)";
        }
        if (elementBottom >= bottomOfWindow - 10) {
          // The bottom of the element is below the viewer's window
          element.style.transform = "translateX(1000px)";
          console.log("i am scroll BOTT");
        }
        console.log(elementBottom, bottomOfWindow);
        // if (elementBottom > bottomOfWindow) {
        //   //   // The element is above the viewer's window
        //   console.log("i am scroll BOTT");
        //   //   element.style.transform = "translateX(1000px)";
        // }
        //   // else if (elementTop < window.innerHeight) {
        //   //   // The element is below the viewer's window
        //   //   element.style.transform = "translateX(-1000px)";
        //   //   console.log("i am scroll right");
        // }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const text =
    "Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.";

  const chunks = text.split(" ").reduce((acc, word, index) => {
    if (index % 2 === 0) {
      acc.push(word);
    } else {
      acc[acc.length - 1] += ` ${word}`;
    }
    return acc;
  }, []);

  const words = text.split(" ");
  const chunks1 = [];
  const chunks2 = [];
  for (let i = 0; i < words.length; i += 4) {
    chunks1.push(words.slice(i, i + 2).join(" "));
    chunks2.push(words.slice(i + 2, i + 4).join(" "));
  }

  return (
    <div>
      <p className="falling-text">
        {chunks.map((chunk, index) => (
          <p
            key={index}
            style={{
              color: "white",
              opacity: 1,
              transition: "transform 0.5s",
              // transform: "translateX(100vw)",
            }}
          >
            {chunk}{" "}
          </p>
        ))}
      </p>
    </div>
  );
};

export default FallingTextComponent;
