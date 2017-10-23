import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.scss';

class Header extends Component {
    render() {
        return (
           <header>
                <div className="header-items container">
                    <div className="row">
                        <div className="logo col-xs-3">
                            <Link to="">
                                <img src="img/logo.png" alt="LOGO"/>
                            </Link>
                        </div>
                        <div className="menu col-xs-9">
                            <div className="row">
                                <ul className="menu-list col-xs-9">
                                    <div className="row">
                                        <li className="col-xs-9"><Link to=""><span>About</span></Link></li>
                                        <li className="col-xs-3"><Link to=""><span>Blog</span></Link></li>
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