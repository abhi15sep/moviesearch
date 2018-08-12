import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.scss';

/**
 * 
 * @param {*} props 
 * Search Bar Component
 */
const SearchBar = (props) => {
    return <div className="searchbar">
        <form onSubmit={props.onSubmit}>
            <input type="text" name="search_keywords" onChange={props.onChange} value={props.keywords}
                placeholder="Search for a movie, tv show, person..." />
            <button type="submit"><i className="fa fa-search"></i>Search</button>
        </form>
    </div>
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    keywords: PropTypes.string
}

export default SearchBar;