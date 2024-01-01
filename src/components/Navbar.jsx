import React from "react";
import logo from "../assets/adidas.png";

function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row justify-between px-4 md:px-10 py-6 leading-7">
      <>
        <img src={logo} alt="Adidas Logo" />
      </>
      <ul className="flex gap-4">
        <li><a href="/about">About</a></li>
        <li><a href="/work">Work</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

