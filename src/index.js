import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component that produces some html
// const App = function(){}
const App = () => {
  return <div>Hello!</div>;
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
