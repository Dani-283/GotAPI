import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import "../styles/navbar.css";
import Burger from "./Burger";

import Menu from "./Menu";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.setRef = this.setRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  setOpen = () => {
    this.setState({ open: !this.state.open });
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  setRef(node) {
    this.ref = node;
  }
  handleClickOutside(event) {
    if (this.ref && !this.ref.contains(event.target)) {
      this.setState({ open: false });
    }
  }

  render() {
    return (
      <div ref={this.setRef} className="navbar-container">
        <div className="navbar">
          <h1 className="title">FlowerShop</h1>
          <ul className="navlinks">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <Burger open={this.state.open} setOpen={this.setOpen} />
        </div>
        <Menu open={this.state.open} setOpen={this.setOpen} />
      </div>
    );
  }
}

Navbar.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Navbar;
