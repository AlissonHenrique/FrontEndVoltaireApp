import React, { Component } from "react";
import { logout } from "../../../services/auth";
import { Link } from "react-router-dom";
import { getUsername } from "../../../services/auth";
import "./styles.css";

class Header extends Component {
  state = {
    name: getUsername()
  };
  handleLogout = () => {
    logout();
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="fundo">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <ul className="nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    Registrar
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/list" className="nav-link">
                    Lista
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <div className="dropdown">
                <a
                  className="btn btn-secondary dropdown-toggle"
                  href="/"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-user" /> {this.state.name}
                </a>

                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <Link
                    to=""
                    onClick={this.handleLogout}
                    className="dropdown-item"
                    href="#"
                  >
                    Sair
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
