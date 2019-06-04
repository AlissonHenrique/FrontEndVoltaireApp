import React, { Component } from "react";

import { Link } from "react-router-dom";
import { getUsername } from "../../../services/auth";
import "./styles.css";
class Header extends Component {
  state = {
    name: getUsername()
  };

  componentDidMount() {
    //console.log(tokenName);
  }

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
          <p>Bem vindo {this.state.name}</p>
        </Link>
      </nav>
    );
  }
}

export default Header;
