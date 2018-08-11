import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.scss';

const SearchBar = (props) => {
    return <div className="searchbar">
        <form onSubmit={props.onSubmit}>
            <input type="text" placeholder="Search for a movie, tv show, person..." name="search" />
            <button type="submit"><i className="fa fa-search"></i>Search</button>
        </form>
    </div>
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func
}

export default SearchBar;