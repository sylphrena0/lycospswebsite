import React, { Component } from 'react';
import { Link} from 'gatsby';
import './Navbar.css';
import icon from '../images/icon.png';
//import { Divide as Hamburger } from 'hamburger-react' //this library is a godsend, fontawesome is homophobic - https://hamburger-react.netlify.app/


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.navbarToggle = this.navbarToggle.bind(this);
    this.state = {
      active: '',
    }
  }

  navbarToggle = () => {
    const active = this.state.active === '' ? 'active' : '';
    this.setState({ active });
  };


  // }
  render() {
    const {children, id} = this.props;
    const hamburgerClass = `hamburger ${this.state.active}`;
    const navmenuClass = `nav-menu ${this.state.active}`;
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
              LYCO SPS 
              <img src={icon} alt="SPS Lycoming Logo" className="icon"/>
            </Link>
            <div className='menu-icon' easing="ease-in">
              <div className={hamburgerClass} onClick={this.navbarToggle} aria-label="Show Menu" aria-expanded={this.expanded} role="button" tabIndex="0"><div id="a"></div><div id="b"></div><div id="c"></div><div id="d"></div><div id="e"></div><div id="f"></div></div>

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
      </>
    );
  };
};

export default Navbar;
