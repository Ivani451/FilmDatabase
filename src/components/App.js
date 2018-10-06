import React, { Component } from "react";
import MovieList from "../containers/MovieList";
import SearchBar from "../containers/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/styles.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <span className="row" id="header">
          <h1 className="navbar-brand">Movie Finder</h1>
          <SearchBar />
        </span>

        <MovieList />
      </div>
    );
  }
}

export default App;
