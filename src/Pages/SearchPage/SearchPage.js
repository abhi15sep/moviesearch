import React, { Component } from 'react';
import MovieCard from 'Components/MovieCard/MovieCard';
import Loader from 'Components/Loader/Loader';
import ScrollerContainer from 'react-infinite-scroller';
import MovieService from 'Services/MovieService';
import './SearchPage.scss';

/**
 * Search page to search movies by keywords
 */
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
    this.fetchMovies = this.fetchMovies.bind(this);
    this.showMovieDetail = this.showMovieDetail.bind(this);
  }

/**
 * Load next page data
 */
  loadNextPage() {
    this.data.page = this.data.page + 1;
    this.fetchMovies();
  }

/**
 * Fetch movies data
 */
  fetchMovies() {
    const keywords = this.props.store.keywords;
    const genresId = this.props.store.current.genresId;

    if (keywords) {
      MovieService.searchMovies(keywords, this.data.page).then(movies => {
        const results = this.state.movies.results.concat(movies.results);
        const appendMovies = Object.assign(movies, {
          results
        });
        this.setState({ movies: appendMovies });
      });
    } else if (genresId >= 0) {
      MovieService.getMoviesByGenres(genresId, this.data.page).then(movies => {
        const results = this.state.movies.results.concat(movies.results);
        const appendMovies = Object.assign(movies, {
          results
        });
        this.setState({ movies: appendMovies });
      });
    } else {
      MovieService.getMovies(this.data.page).then(movies => {
        const results = this.state.movies.results.concat(movies.results);
        const appendMovies = Object.assign(movies, {
          results
        });
        this.setState({ movies: appendMovies });
      });
    }
  }

  /**
   * 
   * @param {*} data raw movie data
   * Navigate to movie detail page
   */
  showMovieDetail(data) {
    window.scrollTo(0, 0);
    const movie = {
      title: data.title,
      releaseDate: data.release_date,
      genres: data.genre_ids && data.genre_ids.map(id => {
        const genresName = this.props.store.genres.find(item => item.id === id);
        return {
          id,
          name: genresName && genresName.name
        }
      }),
      poster: data.poster_path,
      overview: data.overview,
      rating: data.vote_average,
      votes: data.vote_count
    };
    localStorage.setItem('movie_store', JSON.stringify(movie));
    const root = this.props.root;
    const current = Object.assign(this.props.store.current, { movie })
    root.setState({ current });
    this.props.history.push({
      pathname: '/detailpage',
      movie
    });
  }

  render() {
    const movies = this.state.movies.results;
    const error = movies && movies.length === 0 ? 'No Movies Found!' : this.props.store.error;
    return <div className={'searchpage'}>
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
            overview={movie.overview}
            onClick={() => {
              this.showMovieDetail(movie);
            }} />
        })}
      </ScrollerContainer>

      {error && <div className="searchpage-messagebox">
        {error}
      </div>}
    </div>
  }
}


