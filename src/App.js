import "./App.css";
import Home from "./pages/Home";
import Gallery from "./pages/Bookmarked";

import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import Header from "./components/Header";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      bookmarkedBooks: [],
    };
  }

  handleBookmark = (book, bookmarked) => {
    const { bookmarkedBooks } = this.state;
    if (bookmarked) {
      let array = [...bookmarkedBooks, book];
      this.setState({ bookmarkedBooks: array });
    } else {
      let array = bookmarkedBooks.filter((data) => book.name !== data.name);
      this.setState({ bookmarkedBooks: array });
    }
  };
  render() {
    return (
      <HashRouter>
        <Header />
        <div className="container">
          <Route exact path="/">
            <Home
              bookmarkedBooks={this.state.bookmarkedBooks}
              handleBookmark={this.handleBookmark}
            />
          </Route>
          <Route path="/bookmarked">
            <Gallery
              bookmarkedBooks={this.state.bookmarkedBooks}
              handleBookmark={this.handleBookmark}
            />
          </Route>
        </div>
      </HashRouter>
    );
  }
}

export default App;
