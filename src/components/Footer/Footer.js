import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https://www.linkedin.com/in/sachin-dolase-0a073b208/?" target="__blank">
         Sachin Dolase
        </a>
      </span>
      
    </div>
  );
};

export default Footer;