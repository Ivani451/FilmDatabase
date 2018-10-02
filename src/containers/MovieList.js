import React, { Component } from "react";
import { connect } from "react-redux";

class MovieList extends Component {
  renderMovies(movie) {
    return (
      <tr>
        <td key={movie.id}>{movie.title}</td>
      </tr>
    );
  }

  render() {
    return <h1>{this.props.movies.map(this.renderMovies)}cool</h1>;
  }
}

/*
  We use an ES6 shortcut below. The code below is the equivalent to the following:
  function mapStateToProps(state) {
    return { movies: state.movies };
  }

  function mapStateToProps({ movies }) {
  return { movies };
}

*/

function mapStateToProps(state) {
  return { movies: state.movies };
}

export default connect(mapStateToProps)(MovieList);
