import React from "react";
import "../../src/css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar">
        <div className="my-blog-navbar">
          <Link className="my-blog-title" to="/">
            My Blog
          </Link>
        </div>
        <div className="routes-navbar">
          <Link className="home" to="/">
            Home
          </Link>
          <Link className="about" to="/about">
            About
          </Link>
          <Link className="contact" to="/contact">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
