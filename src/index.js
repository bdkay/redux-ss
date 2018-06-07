import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideList from './components/video_list'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyDCgD1fx18NbRaSGFHnVJy63ryMhezFO34';

// Create a new component that produces some html
// const App = function(){}
class App extends Component {
  //Runs immediately, kicks off search
  constructor(props){
    super(props);

    //Array of videos
    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      //Callback function to update list with videos returned

      //In ES6, if key and value are the same, you can delete one
      this.setState({ videos });
      //this.setState({ videos: videos })
    });
  }
  render(){
    return (
      <div>
        <SearchBar />
        <VideoList />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
