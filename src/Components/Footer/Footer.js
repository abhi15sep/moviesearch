import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

/**
 * 
 * @param {*} props 
 * Footer Component
 */
const Footer = (props) => {
    return <div className="footer">
        <p>{props.label}</p>
        <p>{props.copyright}</p>
    </div>

}

Footer.propTypes = {
    label: PropTypes.string,
    copyright: PropTypes.string
}

export default Footer;