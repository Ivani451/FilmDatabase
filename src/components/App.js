import React, { Component } from "react";
import MovieList from "../containers/MovieList";
import SearchBar from "../containers/SearchBar";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Movies</h1>
        <SearchBar />
        <MovieList />
      </div>
    );
  }
}

export default App;
