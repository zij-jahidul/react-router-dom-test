import React from "react";

const Navbar = () => {
  return (
    <section>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "15px",
          background: "blue",
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
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
    </section>
  );
};

export default Navbar;
