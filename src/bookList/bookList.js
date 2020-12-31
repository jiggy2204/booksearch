import React, { Component } from "react";

import BookItem from "../bookItem/bookItem";

class BookList extends Component {
  render() {
    const { searchTerm, printFilter, bookFilter, itemImage } = this.props;
    const list = this.props.books
      .filter(
        (book) =>
          book.title.includes(searchTerm) &&
          (printFilter === "" || bookFilter === "")
      )
      .map((book, key) => <BookItem {...book} key={key} image={itemImage} />);

    return <div className="FilterableList">{list}</div>;
  }
}

BookList.defaultProps = {
  books: [],
};

export default BookList;
