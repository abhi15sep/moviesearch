import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss';
import SearchBar from 'Components/SearchBar/SearchBar';


const Navbar = (props) => {
  return <div className="navbar">
    <ul>
      {
        props.navs && props.navs.map((item, index) => {
          return <li key={index}><a className={props.currentUrl === item.url ? 'active' : ''} href={item.url}>{item.label}</a></li>
        })
      }
      <SearchBar />
    </ul>
  </div>
}

Navbar.propTypes = {
  navs: PropTypes.array,
  currentUrl: PropTypes.string,
}

export default Navbar;