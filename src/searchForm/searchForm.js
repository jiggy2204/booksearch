import React, { Component } from "react";
import FilterOptions from "../filterOptions/filterOptions";
import SearchBox from "../searchBox/searchBox";

class SearchForm extends Component {
  render() {
    return (
      <div>
        <SearchBox
          searchTerm={this.props.searchTerm}
          handleupdate={this.props.handleUpdate}
        />
        <FilterOptions
          printFilter={this.props.printFilter}
          bookFilter={this.props.bookFilter}
          handlePrintFilterChange={this.props.handlePrintFilterChange}
          handleBookFilterChange={this.props.handleBookFilterChange}
        />
      </div>
    );
  }
}

export default SearchForm;
