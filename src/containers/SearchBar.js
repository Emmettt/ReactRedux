import React, { Component } from 'react';

class SearchBar extends Component {
  onInput = e => {
    this.props.inputHandler(e.target.value);
  };

  render() {
    return (
      <input
        className="input"
        placeholder="Search..."
        type="text"
        onChange={this.onInput}
      />
    );
  }
}

export default SearchBar;
