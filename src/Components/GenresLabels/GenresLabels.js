import React from 'react';
import PropTypes from 'prop-types';
import './GenresLabels.scss';

/**
 * 
 * @param {*} props 
 * Genres Labels Component
 */
const GenresLabels = (props) => {
    return <div className="genreslabels">
        <ul>
            {props.genres && props.genres.map((item, index) => {
                return <li key={index}><a>{item.name}</a></li>
            })}
        </ul>
    </div>
}

GenresLabels.propTypes = {
    genres: PropTypes.array
}

export default GenresLabels;