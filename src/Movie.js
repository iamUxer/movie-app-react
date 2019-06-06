import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {
  render() {
    return (
      <div>
        <h1>hello! This is a movie</h1>;
        <MoviePoster />
      </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <img src="https://images-na.ssl-images-amazon.com/images/I/61BH-RJ0mRL._SX495_BO1,204,203,200_.jpg" />
    );
  }
}

export default Movie;
