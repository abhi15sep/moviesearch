import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

const MovieCard = (props) => {
    return <div className="moviecard">
        <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" alt={props.title} />
        <div className="moviecard-info">
            <h3>{props.title}</h3>
            <p className="moviecard-rating">{props.rating}</p>
            <p className="moviecard-overview">{props.overview}</p>
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
}

export default MovieCard;