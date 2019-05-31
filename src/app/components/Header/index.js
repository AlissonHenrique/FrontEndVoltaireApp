import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./styles.css";
class Header extends Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/" className="nav-link active" href="#">
          Home
        </Link>

        <Link
          to="/register"
          className="nav-link "
          href="#"
          aria-disabled="true"
        >
          Matrícula
        </Link>
      </nav>
    );
  }
}

export default Header;
