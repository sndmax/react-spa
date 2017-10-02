import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.scss';

class Header extends Component {
    render() {
        return (
           <header>
               <div className="header-items">
                   <div className="logo">
                       <Link to="">
                           <img src="img/logo.png" alt="LOGO"/>
                       </Link>
                   </div>
                   <div className="menu">
                       <ul className="menu-list">
                           <li><Link to="">About</Link></li>
                           <li><Link to="">Blog</Link></li>
                       </ul>
                       <button>Sign in</button>
                   </div>
               </div>
           </header>
        );
    }
}
export default Header;