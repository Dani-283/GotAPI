import React, { Component } from "react";
import axios from "axios";
// import axios from "axios";
import "./vjezba.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }
  // componentDidMount() {
  //   const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
  //   fetch(apiURL)
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({ books: result });
  //       },
  //       (error) => {
  //         this.setState({ error });
  //       }
  //     );
  // }

  fetchData = () => {
    const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
    axios.get(apiURL).then((res) => {
      this.setState({ books: res.data });
    });
  };
  render() {
    // let array = [];
    const { books } = this.state;
    return (
      <div className="App">
        <h1>Game of Thrones Books</h1>
        <h2>Fetch a list from an API and display it</h2>

        <div>
          <button className="fetch-button" onClick={this.fetchData}>
            Fetch Data
          </button>
          <br />
        </div>

        {/* Use JSX below for each book */}
        <div className="books">
          {books.map((book, index) => (
            <div className="book" key={index}>
              <h3>{index + 1}</h3>
              {/* <h3>{/[^/]*$/.exec(book.url)[0]}</h3> */}
              <h2>{book.name}</h2>

              <div className="details">
                <p>👨: {book.authors}</p>
                <p>📖: {book.numberOfPages}</p>
                <p>🏘️: {book.country}</p>
                <p>⏰: {book.released}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
