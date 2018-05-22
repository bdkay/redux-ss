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

    return (
      <div>
        <input
        // Controlled component which has its value set by state. Its value only ever changes when the state changes
        value={ this.state.term }
        // When changing state, always use this.setState. this.state = is only used in the constructor
        onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }

}

// Functional component

// const SearchBar = () => {
//   return <input />;
// }

export default SearchBar;
