import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss';

const Navbar = (props) => {
  return <div className="navbar">
    <ul>
      {
        props.navs && props.navs.map((item, index) => {
          return <li key={index} onClick={item.onClick}><a className={ props.activeId === item.id ? 'active' : ''} href={item.url}>{item.label}</a></li>
        })
      }
      {props.rightComponent}
    </ul>
  </div>
}

Navbar.propTypes = {
  navs: PropTypes.array,
  activeId: PropTypes.number
}

export default Navbar;