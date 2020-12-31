import React, { Component } from "react";
import BookList from "./bookList/bookList";
import SearchForm from "./searchForm/searchForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      printFilter: "",
      bookFilter: "",
      itemImage: "",
    };
  }

  updateSearchTerm(url) {
    this.setState({
      searchTerm: url,
    });
  }

  updatePrintFilterOption(option) {
    this.setState({
      printFilter: option,
    });
  }

  updateBookFilterOption(option) {
    this.setState({
      bookFilter: option,
    });
  }

  render() {
    const url = "https://www.googleapis.com/books/v1/volumes";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    return (
      <main className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <SearchForm
          searchTerm={this.state.searchTerm}
          handleUpdate={(url) => this.updateSearchTerm(url)}
          handlePrintFilterChange={(option) =>
            this.updatePrintFilterOption(option)
          }
          handleBookFilterChange={(option) =>
            this.updateBookFilterOption(option)
          }
          printFilter={this.state.printFilter}
          bookFilter={this.state.bookFilter}
        />
        <BookList
          itemImage={this.state.itemImage}
          searchTerm={this.state.searchTerm}
          printFilter={this.state.printFilter}
          bookFilter={this.state.bookFilter}
        />
      </main>
    );
  }
}

export default App;
