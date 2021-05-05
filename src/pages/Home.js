import React, { Component } from "react";
import Card from "../components/Book";
import "../styles/home.css";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      books: [],
      filteredBooks: [],
      // bookmarkedBooks: [],
    };
  }

  componentDidMount() {
    const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
    fetch(apiURL)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            books: result,
            isLoaded: true,
            // filteredBooks: bookmarkedBooks,
          });
        },
        (error) => {
          this.setState({ error });
          console.log("error" + error);
        }
      );
  }

  handleSearch = (event) => {
    const { books } = this.state;

    let value = event.target.value.toUpperCase();
    let result = [];
    result = books.filter((data) => {
      return data.name.toUpperCase().search(value) !== -1 && value !== "";
    });

    this.setState({
      filteredBooks: result,
    });
  };

  render() {
    // let array = [];
    const { books, filteredBooks } = this.state;
    const { bookmarkedBooks, handleBookmark } = this.props;
    return (
      <div className="content">
        <h1>Game of Thrones Books</h1>

        <div className="search-container">
          <input
            onChange={(event) => this.handleSearch(event)}
            type="text"
            placeholder="search game of thrones books"
          ></input>
        </div>

        {books.forEach((book, index) => {
          book.num = index;
        })}

        <div className="books">
          {filteredBooks.map((book, index) => (
            <Card
              book={book}
              key={index}
              bookmarkedBooks={bookmarkedBooks}
              num={book.num}
              handleBookmark={handleBookmark}
            />
          ))}
          {console.log(filteredBooks)}
        </div>
      </div>
    );
  }
}

export default Home;
