import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <div
      style={{
        marginTop: "30px",
        padding: "2px 0",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
      }}
    >
      <div className="container">
        <p> Copyright. &copy; {date.getFullYear()} </p>
      </div>
    </div>
  );
};

export default Footer;
