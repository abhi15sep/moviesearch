import React, { Component } from 'react';
import MovieCard from 'Components/MovieCard/MovieCard';
import './SearchPage.scss';

export class SearchPage extends Component {

  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    console.log(this.props);
  }
  static mapStoreToProps(store) {
    return {
      movielist: store.movielist
    };
  }
  updateState() {
    const dispatch = this.props.dispatch;
    dispatch({movieList: ['hahahah']});
  }
  
  render() {
    const movies = this.props.store.movies.results;
    return <div className={this.props.className.toLowerCase()}>
      {movies && movies.map((movie, index) => {
        return <MovieCard key={index} 
        id={movie.id} 
        title={movie.title} 
        rating={movie.vote_average} 
        overview={movie.overview} />
      })}
      </div>
  }
}


