import React, { Component } from 'react';
import MovieCard from 'Components/MovieCard/MovieCard';
import Loader from 'Components/Loader/Loader';
import ScrollerContainer from 'react-infinite-scroller';
import MovieService from 'Services/MovieService';
import './SearchPage.scss';

export class SearchPage extends Component {

  constructor(props) {
    super(props);
    this.data = {
      page: 1,
      totalPage: props.store.movies.total_pages
    }
    this.state = {
      movies: props.store.movies
    }
    this.loadNextPage = this.loadNextPage.bind(this);
  }

  loadNextPage() {
    this.data.page = this.data.page + 1;
    MovieService.getMovies(this.data.page).then(movies => {
      const results = this.state.movies.results.concat(movies.results);
      const appendMovies = Object.assign(movies, {
        results
      });
      this.setState({movies: appendMovies});
    });
  }
  
  render() {
    const movies = this.state.movies.results;
    const error = movies && movies.length === 0 ? 'No Movies Found!' : this.props.store.error;
    return <div className={this.props.className.toLowerCase()}>
      <ScrollerContainer
        pageStart={1}
        loadMore={() => {
          this.loadNextPage()
        }}
        hasMore={this.data.page < this.data.totalPage}
        loader={<Loader key={0}></Loader>}
      >
        {movies && movies.map((movie, index) => {
          return <MovieCard key={index}
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            rating={movie.vote_average}
            overview={movie.overview} />
        })}
      </ScrollerContainer>

      {error && <div className="searchpage-messagebox">
        {error}
      </div>}
    </div>
  }
}


