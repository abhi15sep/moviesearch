import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

const MovieCard = (props) => {
    const overview = props.overview.length > 200 ? props.overview.substring(0, 200) + ' ...' : props.overview;
    return <div className="moviecard" onClick={props.onClick}>
        <div className="moviecard-thumbnail">
            <p className="moviecard-title">{props.title}</p>
            <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} alt={props.title} />
        </div>
        <div className="moviecard-info">
            <p className="moviecard-rating">Rates: {props.rating}</p>
            <div className="moviecard-overview">{overview}</div>
            <p><button>More Info</button></p>
        </div>
    </div>

}

MovieCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    poster: PropTypes.string,
    overview: PropTypes.string,
    rating: PropTypes.number,
    onClick: PropTypes.func
}

export default MovieCard;