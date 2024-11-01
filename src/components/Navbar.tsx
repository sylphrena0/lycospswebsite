import { Link } from 'gatsby';
import React, { Component } from 'react';
import icon from '../images/icon.png';
import './Navbar.css';

interface NavbarState {
  isOpen: boolean;
}


class Navbar extends Component<unknown, NavbarState> {
  constructor(props) {
    super(props);
    this.navbarToggle = this.navbarToggle.bind(this);
    this.state = { isOpen: false };
  }

  navbarToggle = () => {
    this.setState(prev => ({ isOpen: !prev.isOpen }));
  };


  render() {
    const state = this.state.isOpen ? 'active' : '';
    const hamburgerClass = `hamburger ${state}`;
    const navmenuClass = `nav-menu ${state}`;
    return (

      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            LYCO SPS
            <img src={icon} alt="SPS Lycoming Logo" className="icon" />
          </Link>
          <div className='menu-icon'>
            <div className={hamburgerClass} onClick={this.navbarToggle} aria-label="Show Menu" aria-expanded={this.state.isOpen} role="button" tabIndex={0}>
              <div id="a"></div><div id="b"></div><div id="c"></div><div id="d"></div><div id="e"></div><div id="f"></div>
            </div>

          </div>
          <ul className={navmenuClass}>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/history' className='nav-links'>
                History
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/photos' className='nav-links'>
                Photos
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/colloquium' className='nav-links'>
                Colloquium
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sigmapisigma' className='nav-links'>
                ΣΠΣ Members
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links'>
                Contact Us
              </Link>
            </li>

          </ul>
        </div>
      </nav>

    );
  };
};

export default Navbar;
