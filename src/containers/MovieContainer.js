import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import * as movieActions from "../store/modules/movie";
class MovieContainer extends Component {
  /*state = {
    isLoading: true,
    movies: []
  };*/

  getMovies = async () => {
    const { MovieActions } = this.props;
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    //console.log(movies);
    //this.setState({ movies, isLoading: false });
    MovieActions.changeData(movies);
    MovieActions.isLoading(false);
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.props;
    console.log(movies);
    return <>{isLoading ? <Loading /> : <Movie movies={movies} />}</>;
  }
}

const mapStateToProps = ({ movie }) => ({
  isLoading: movie.isLoading,
  movies: movie.movies
});

const mapDispatchProps = dispatch => ({
  MovieActions: bindActionCreators(movieActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchProps
)(MovieContainer);
