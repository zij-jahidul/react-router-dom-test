import React from "react";

const Footer = () => {
  return (
    <section>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "15px",
          background: "red",
          height: "100px",
          flexItem: "center",
          paddingTop: "50px",
          marginTop: "0px",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          color: "white",
        }}
      >
        <li>Global Footer Part</li>
      </ul>
    </section>
  );
};

export default Footer;
