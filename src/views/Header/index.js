import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.scss';

class Header extends Component {
    render() {
        return (
           <header className="c-header">
               <div className="container">
                   <div className="row c-header__items">
                       <div className="c-header__logo col-xs-3">
                           <Link to="">
                               <img src="img/logo.png" alt="LOGO"/>
                           </Link>
                       </div>
                       <div className="c-header__menu col-xs-9">
                           <div className="row">
                               <ul className="c-header__list col-xs-9">
                                   <div className="row">
                                       <li className="col-sm-9 col-xs-8"><Link to=""><span>About</span></Link></li>
                                       <li className="col-sm-3 col-xs-4"><Link to=""><span>Blog</span></Link></li>
                                   </div>
                               </ul>
                               <button className="col-xs-3">Sign in</button>
                           </div>
                      </div>
                   </div>
               </div>
           </header>
        );
    }
}
export default Header;