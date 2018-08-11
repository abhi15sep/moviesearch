import React, { Component } from 'react';
import RouterWrapper from 'Libs/RouterWrapper';
import * as Pages from 'Pages';
import MovieService from 'Services/MovieService';
import Navbar from 'Components/Navbar/Navbar';
import Footer from 'Components/Footer/Footer';
import SearchBar from 'Components/SearchBar/SearchBar';

import './AppContainer.scss';
class AppContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
      },
      navbar: [{
        label: 'Home',
        url: '#/searchpage/'
      }],
      footer: {
        label: 'Movies Search',
        copyright: '©copyright 2018'
      },
      logo: 'Mobie Search',
      keywords: '',
      error: ''
    }
    this.doSearchMovies = this.doSearchMovies.bind(this);
    this.onChangeKeywords = this.onChangeKeywords.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  fetchMovies() {
    if (this.state.keywords) {
      MovieService.searchMovies(this.state.keywords).then((movies) => {
        console.log(movies);
        this.setState({ movies });
      }).catch(error => {
        this.setState({ error: error.message });
      });
    } else {
      MovieService.getMovies().then((movies) => {
        console.log(movies);
        this.setState({ movies });
      }).catch(error => {
        this.setState({ error: error.message });
      });
    }
  }

  doSearchMovies(e) {
    e.preventDefault();
    this.fetchMovies();
  }
  onChangeKeywords(e) {
    this.setState({keywords: e.target.value });
  }
  componentDidMount() {
    this.fetchMovies();
  }
  render() {
    const routeUrls = Object.keys(Pages).map(Page => Page.toLowerCase());
    const indexRoute = routeUrls.length >= 0 ? routeUrls[0] + '/' : '/';
    const content = <RouterWrapper indexRoute={indexRoute} store={this.state} dispatch={this.setState.bind(this)} >
      {
        Object.keys(Pages).map((name) => {
          const Page = Pages[name];
          return <Page key={name} className={name} />
        })
      }
    </RouterWrapper>;
    return <div className="container">
      <Navbar
        navs={this.state.navbar}
        currentUrl={this.props.location.pathname} 
        rightComponent={<SearchBar 
          keywords={this.state.keywords} 
          onSubmit={this.doSearchMovies} 
          onChange={this.onChangeKeywords}
          />}
        />
      {content}
      <Footer {...this.state.footer} />
    </div>
  }
}

export default AppContainer;
