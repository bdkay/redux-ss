import React, { Component } from 'react';

// Component for searching videos

// Class-based component
class SearchBar extends Component {
  render () {
    return <input onChange={(event => console.log(event.target.value))} />;
  }

}

// Functional component

// const SearchBar = () => {
//   return <input />;
// }

export default SearchBar;
