import React, { Component } from "react";

class BookItem extends Component {
  render() {
    return (
      <div className="ListItem">
        <div className="ListItem__pic">
          <img alt="bookPhoto" className="ListItem__image" />
        </div>
        <div className="ListItem__content">
          <div className="ListItem__title"></div>
          <div className="ListItem__author"></div>
          <div className="ListItem__price"></div>
          <div className="ListItem__description"></div>
        </div>
      </div>
    );
  }
}

export default BookItem;
