import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <form class="form-box">
        <label for="book">Search:</label>
        <input
          type="text"
          name="book"
          id="book"
          value={this.props.searchTerm}
          onChange={(e) => this.props.handleUpdate(e.target.value)}
        ></input>
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchBox;
