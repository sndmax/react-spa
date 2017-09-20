import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.scss';

class Header extends Component {
    render() {
        return (
           <header>
               <div className="header-items">
                   <div className="logo">
                       <a href="/">
                           <img src="img/logo.png" alt="LOGO"/>
                       </a>
                   </div>
                   <div className="menu">
                       <ul className="menu-list">
                           <li><a href="">About</a></li>
                           <li><a href="">Blog</a></li>
                       </ul>
                       <button>Sign in</button>
                   </div>
               </div>
           </header>
        );
    }
}
export default Header;