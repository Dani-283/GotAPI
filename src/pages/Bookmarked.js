import React, { Component } from "react";
import Card from "../components/Book";
import "../styles/home.css";

export class Bookmarked extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      books: [],
    };
  }

  componentDidMount() {
    this.setState({ books: this.props.bookmarkedBooks });
  }
  render() {
    const { bookmarkedBooks, handleBookmark } = this.props;
    return (
      <div className="content">
        <h1>Books you bookmarked</h1>

        <div className="books">
          {bookmarkedBooks.map((book, index) => (
            <Card
              book={book}
              key={index}
              handleBookmark={handleBookmark}
              bookmarkedBooks={bookmarkedBooks}
            />
          ))}
        </div>
        {!bookmarkedBooks.length && (
          <p style={{ margin: "auto" }}>No bookmarked books :(</p>
        )}
      </div>
    );
  }
}

export default Bookmarked;
