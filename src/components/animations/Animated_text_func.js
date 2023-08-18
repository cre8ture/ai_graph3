import React, { useEffect } from "react";

const FallingTextComponent = () => {
  function spillingWords(element, left_or_right = "-") {
    const scrollHeight = document.documentElement.scrollHeight;

    elements1.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const bottomOfWindow = window.innerHeight + window.pageYOffset;

      if (elementTop > 0 && elementTop < window.innerHeight) {
        element.style.transform = "translateX(10px)";
      } else {
        element.style.transform = "translateX(left_or_right1000px)";
      }

      if (elementBottom >= bottomOfWindow - 10) {
        element.style.transform = "translateX(left_or_right1000px)";
        // console.log("i am scroll BOTT");
      }
      if (elementTop >= bottomOfWindow) {
        element.style.transform = "translateX(left_or_right1000px)";
      }
      if (elementBottom + 30 >= window.innerHeight) {
        element.style.transform = "translateX(left_or_right1000px)";
      }
      if (elementTop - 50 <= 0) {
        element.style.transform = "translateX(left_or_right1000px)";
      }

      console.log(elementBottom, bottomOfWindow);
    });
  }

  
  useEffect(() => {
    const handleScroll = () => {
      spillingWords(chunks1, "-");
      spillingWords(chunks2, "+");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const text =
    "Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.";

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
      {chunks1.map((chunk, index) => (
        <React.Fragment key={index}>
          <span
            className="chunks1"
            style={{
              color: "white",
              display: "inline-block",
              opacity: 1,
              transition: "transform 0.5s",
            }}
          >
            {chunks1[index]}{" "}
          </span>
          <span
            className="chunks2"
            style={{
              color: "white",
              opacity: 1,
              display: "inline-block",
              transition: "transform 0.5s",
            }}
          >
            {index < chunks2.length && chunks2[index]}{" "}
          </span>
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default FallingTextComponent;
