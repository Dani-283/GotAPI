import React, { Component } from "react";
import Navbar from "./Navbar";

import "../styles/header.css";

export class Header extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#cd0101" }}>
        <div className="header-div">
          <a
            href="https://www.anapioficeandfire.com/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.anapioficeandfire.com/
          </a>
        </div>
        <Navbar />
      </div>
    );
  }
}

export default Header;
