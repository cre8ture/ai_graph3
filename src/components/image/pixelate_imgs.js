import React, { useState } from "react";

const ImageSplitter = ({ src }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const componentTop = document
      .getElementById("image-splitter")
      .getBoundingClientRect().top;
    // You can adjust the threshold as needed for when the image should split
    const splitThreshold = 20;
    setIsVisible(componentTop < splitThreshold);
  };

  // Attach and detach scroll event listener when the component mounts/unmounts
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pieceStyle = (isRight) => ({
    backgroundImage: `url(${src})`,
    backgroundSize: "200% 200%",
    backgroundRepeat: "no-repeat",
    paddingTop: "50%",
    transition: "transform .5s ease-out",
    transform: isVisible
      ? "none"
      : `translate(${isRight ? Math.random() * 100 : -Math.random() * 100}px, ${
          Math.random() * 100 - 50
        }px)`,
  });

  return (
    <div
      id="image-splitter"
      style={{ display: "grid", gridTemplateColumns: "50% 50%" }}
    >
      <div style={{ ...pieceStyle(false), backgroundPosition: "0 0" }} />
      <div style={{ ...pieceStyle(true), backgroundPosition: "100% 0" }} />
      <div style={{ ...pieceStyle(false), backgroundPosition: "0 100%" }} />
      <div style={{ ...pieceStyle(true), backgroundPosition: "100% 100%" }} />
    </div>
  );
};

export default ImageSplitter;
