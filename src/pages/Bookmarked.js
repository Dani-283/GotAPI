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
    // let array = [];
    const { books } = this.state;
    const { bookmarkedBooks, handleBookmark } = this.props;
    return (
      <div className="content">
        <h1>Books you bookmarked</h1>

        {/* Use JSX below for each book */}
        {books.forEach((book, index) => {
          book.num = index;
        })}

        <div className="books">
          {bookmarkedBooks.map((book, index) => (
            <Card
              book={book}
              key={index}
              num={book.num}
              handleBookmark={handleBookmark}
              // handleBookmPerPage={this.handleBookmPerPage}
              bookmarkedBooks={bookmarkedBooks}
            />
          ))}
          {!bookmarkedBooks.length && (
            <p style={{ margin: "auto" }}>No bookmarked books :(</p>
          )}
        </div>
      </div>
    );
  }
}

export default Bookmarked;
