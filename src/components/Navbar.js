import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Burger from "./Burger";
import Menu from "./Menu";

import "../styles/navbar.css";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  setOpen = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div className="navbar-container">
        <div className="navbar">
          <h1 className="title">
            <i class="fas fa-dragon"></i> Game of Thrones API
          </h1>
          <ul className="navlinks">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/bookmarked">Bookmarked</NavLink>
            </li>
          </ul>
          <Burger open={this.state.open} setOpen={this.setOpen} />
        </div>
        <Menu open={this.state.open} setOpen={this.setOpen} />
      </div>
    );
  }
}

export default Navbar;
