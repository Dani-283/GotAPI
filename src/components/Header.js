import React, { Component } from "react";
import Navbar from "./Navbar";

import "../styles/header.css";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { homeClicked: true, bookmarkedClicked: false };
  }
  handleNavHome = () => {
    this.setState({
      homeClicked: true,
      bookmarkedClicked: false,
    });
  };
  handleNavBookmarked = () => {
    this.setState({
      bookmarkedClicked: true,
      homeClicked: false,
    });
  };

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
        <Navbar
          handleNavHome={this.handleNavHome}
          handleNavBookmarked={this.handleNavBookmarked}
          homeClicked={this.state.homeClicked}
          bookmarkedClicked={this.state.bookmarkedClicked}
        />
      </div>
    );
  }
}

export default Header;
