import { IconButton } from '@mui/material';
import { Link } from 'gatsby';
import { Sling as Hamburger } from 'hamburger-react';
import React, { Component } from 'react';
import icon from '../images/icon.png';
import { active, menu_icon, nav_item, nav_link, nav_menu, navbar, navbar_container, navbar_logo, navbar_title } from './Navbar.module.scss';
interface NavbarState {
  isOpen: boolean;
}


class Navbar extends Component<unknown, NavbarState> {
  constructor(props: unknown) {
    super(props);
    this.navbarToggle = this.navbarToggle.bind(this);
    this.state = { isOpen: false };
  }

  navbarToggle = () => {
    this.setState(prev => ({ isOpen: !prev.isOpen }));
  };


  render() {
    const state = this.state.isOpen ? active : '';
    return (

      <nav id={navbar}>
        <div id={navbar_container}>
          <Link to='/' id={navbar_title}>
            LYCO SPS <img src={icon} alt="SPS Lycoming Logo" id={navbar_logo} />
          </Link>
          <IconButton onClick={this.navbarToggle} aria-label="Show Menu" aria-expanded={this.state.isOpen} id={menu_icon} tabIndex={0}>
            <Hamburger />
          </IconButton>
          <ul id={nav_menu} className={state}>
            <NavLink page='/' name='Home' />
            <NavLink page='/history' name='History' />
            <NavLink page='/photos' name='Photos' />
            <NavLink page='/colloquium' name='Colloquium' />
            <NavLink page='/sigmapisigma' name='ΣΠΣ Members' />
            <NavLink page='/contact' name='Contact Us' />
          </ul>
        </div>
      </nav>

    );
  };
};

const NavLink: React.FC<{ page: string, name: string }> = ({ page, name }) => {
  return (
    <li className={nav_item}>
      <Link to={page} className={nav_link}>{name}</Link>
    </li>
  );
};

export default Navbar;
