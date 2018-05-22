import React, { Component } from 'react';

// Component for searching videos

// Class-based component w/ ES6, extends gives it added functionality
class SearchBar extends Component {
  constructor(props){
    // Initializing state in a class-based component
    super(props);

    this.state = { term: '' };
  }

  render () {
 // return <input onChange={(event) => console.log(event.target.value))} />;
 // Single line arrow functions can drop leading parens
    return <input onChange={(event => console.log(event.target.value))} />;
  }

}

// Functional component

// const SearchBar = () => {
//   return <input />;
// }

export default SearchBar;
