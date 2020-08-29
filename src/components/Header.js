import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
    <header id="header" className="alt">
        <h1><a href="index.html">Solid State</a></h1>
        <ul className="links">
            <li><NavLink to="/" activeClassName="is-active">Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="is-active">About</NavLink></li>
            <li><NavLink to="/product" activeClassName="is-active">Products</NavLink></li>
            <li><NavLink to="/contact" activeClassName="is-active">Contact</NavLink></li>
        </ul>
        <nav>
            <a href="#menu">Menu</a>
        </nav>
    </header>

    // <header className={classes.Toolbar}>
    //     <DrawerToggle clicked={props.drawerToggleClicked} />
    //     <div className={classes.Logo}>
    //         Solid State LOGO
    //     </div>
    //     <nav className={classes.DesktopOnly}>
    //         <NavigationItems />
    //     </nav>
    // </header>

)

export default Header;
