import React, { Component } from "react";
import { connect } from "react-redux";

class MovieList extends Component {
  renderMovies(movie) {
    return (
      <div>
        <div className="card">
          <img
            className="card-img-top"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="Card image cap"
            height="180"
            width="286"
          />
          <div className="card-body" width="700">
            <h5 class="card-title">{movie.title}</h5>
            <p class="card-text">{movie.overview}</p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <h1>{this.props.movies.map(this.renderMovies)}</h1>;
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
