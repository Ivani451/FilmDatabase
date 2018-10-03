import React, { Component } from "react";
import MovieList from "../containers/MovieList";
import SearchBar from "../containers/SearchBar";
import "../../src/styles.css";

class App extends Component {
  render() {
    return (
      <div class="container">
        <SearchBar />
        <MovieList />
      </div>
    );
  }
}

export default App;
