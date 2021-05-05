import React, { Component } from "react";
import { func, bool } from "prop-types";

import "../styles/burger.css";
export class Burger extends Component {
  render() {
    let burger_container = this.props.open
      ? "burger-container-open"
      : "burger-container";
    return (
      <div class={burger_container} onClick={this.props.setOpen}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;
