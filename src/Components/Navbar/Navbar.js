import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss';

const Navbar = (props) => {
  const currentUrl = '#' + props.currentUrl;
  return <div className="navbar">
    <ul>
      {
        props.navs && props.navs.map((item, index) => {
          return <li key={index}><a className={ currentUrl === item.url ? 'active' : ''} href={item.url}>{item.label}</a></li>
        })
      }
      {props.rightComponent}
    </ul>
  </div>
}

Navbar.propTypes = {
  navs: PropTypes.array,
  currentUrl: PropTypes.string,
  rightComponent: PropTypes.object
}

export default Navbar;