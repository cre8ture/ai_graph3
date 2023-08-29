import React, { useState, useEffect } from "react";

const Notification = ({ text }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (text) {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 2000);
    }
  }, [text]);

  const notificationStyle = {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#333",
    color: "white",
    opacity: visible ? 1 : 0,
    transition: `opacity ${visible ? "1s" : "1s"} ease-in-out`,
  };

  return <div style={notificationStyle}>{text}</div>;
};

export default Notification;
