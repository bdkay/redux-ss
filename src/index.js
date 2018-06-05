import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyDCgD1fx18NbRaSGFHnVJy63ryMhezFO34';

YTSearch({ key: API_KEY, term: 'surfboards' }, function(data){
  console.log(data);
});

// Create a new component that produces some html
// const App = function(){}
class App extends Component {
  render(){
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
