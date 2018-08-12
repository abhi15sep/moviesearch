import React from 'react';
import PropTypes from 'prop-types';
import './GenresLabels.scss';

const GenresLabels = (props) => {
    return <div className="genreslabels">
        <ul>
            {props.genres && props.genres.map((item, index) => {
                return <li key={index} onClick={props.onClick}><a>{item.name}</a></li>
            })}
        </ul>
    </div>
}

GenresLabels.propTypes = {
    genres: PropTypes.array,
    onClick: PropTypes.func
}

export default GenresLabels;