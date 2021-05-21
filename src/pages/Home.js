import React, { Component } from "react";
import Card from "../components/Book";
import Search from "../components/Search";
import "../styles/home.css";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      books: [],
      filteredBooks: [],
      filter: "",
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
    this.setState({ filter: value });
    let result = [];

    result = books.filter((data) => {
      return data.name.toUpperCase().search(value) !== -1 && value !== "";
    });

    this.setState({
      filteredBooks: result,
    });
  };

  render() {
    const { books, filteredBooks } = this.state;
    const { bookmarkedBooks, handleBookmark } = this.props;
    return (
      <div className="content">
        <h1>Game of Thrones Books</h1>

        <Search handleSearch={this.handleSearch} />

        <div className="books">
          {filteredBooks.map((book, index) => (
            <Card
              book={book}
              key={index}
              bookmarkedBooks={bookmarkedBooks}
              handleBookmark={handleBookmark}
            />
          ))}
          {!filteredBooks.length &&
            !this.state.filter.length &&
            books.map((book, index) => (
              <Card
                book={book}
                key={index}
                bookmarkedBooks={bookmarkedBooks}
                handleBookmark={handleBookmark}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Home;
