import React, { Component } from "react";
import "../styles/book.css";

export class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarked: false,
    };
  }

  componentDidMount() {
    const { bookmarkedBooks, book } = this.props;
    bookmarkedBooks.some((data) => data.name === book.name)
      ? this.setState({ bookmarked: true })
      : this.setState({ bookmarked: false });
    //
  }

  toggleBookmark = (a) => {
    const { book, handleBookmark } = this.props;
    let temp;
    console.log(book);
    this.setState({ bookmarked: !a }, () => {
      // console.log(this.state.bookmarked);
      temp = this.state.bookmarked;

      handleBookmark(book, temp);
      // if (a) this.props.handleBookmPerPage(book);
    });
  };
  render() {
    const { book, num, bookmarkedBooks } = this.props;
    let iconStyle = bookmarkedBooks.some((data) => data.name === book.name)
      ? "fas fa-crown clicked"
      : "fas fa-crown";
    let a = bookmarkedBooks.some((data) => data.name === book.name);
    return (
      <div className="book" num={num}>
        <div className="book-title">
          <h3>{num + 1}</h3>

          <button
            onClick={() => {
              this.toggleBookmark(a);
            }}
          >
            <i class={iconStyle}></i>
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
