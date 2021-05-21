import React, { Component } from "react";

export class Search extends Component {
  render() {
    return (
      <div className="search-container">
        <input
          onChange={(event) => this.props.handleSearch(event)}
          type="text"
          placeholder="search game of thrones books"
        ></input>
      </div>
    );
  }
}

export default Search;
