import React, { Component } from "react";
import "../styles/book.css";

export class Book extends Component {
  toggleBookmark = (a) => {
    const { book, handleBookmark } = this.props;
    handleBookmark(book, !a);
  };
  render() {
    const { book, bookmarkedBooks } = this.props;
    let a = bookmarkedBooks.some((data) => data.name === book.name);
    return (
      <div className="book">
        <div className="book-title">
          <button
            onClick={() => {
              this.toggleBookmark(a);
            }}
          >
            <i className={a ? "fas fa-crown clicked" : "fas fa-crown"}></i>
          </button>
          {/* <h3>{/[^/]*$/.exec(book.url)[0]}</h3> */}
          <h2>{book.name}</h2>
        </div>
        <div className="details">
          <p>👨: {book.authors}</p>
          <p>📖: {book.numberOfPages}</p>
          <p>🏘️: {book.country}</p>
          <p>⏰: {book.released}</p>
        </div>
      </div>
    );
  }
}

export default Book;
