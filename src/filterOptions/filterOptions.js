import React, { Component } from "react";

class FilterOptions extends Component {
  render() {
    const { bookFilter, printFilter } = this.props;
    return (
      <div className="filterMenus">
        <label for="print-type">Print Type:</label>
        <select
          name="print-type"
          value={printFilter}
          onChange={(e) => this.props.handlePrintFilterChange(e.target.value)}
        >
          {printFilter}
        </select>

        <label for="book=type">Book Type:</label>
        <select
          name="book-type"
          value={bookFilter}
          onChange={(e) => this.props.handleBookFilterChange(e.target.value)}
        >
          {bookFilter}
        </select>
      </div>
    );
  }
}

export default FilterOptions;
