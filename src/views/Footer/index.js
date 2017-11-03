import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <p className="col-xs-12">&copy; 2017 All rights reserved.</p>
                </div>
            </footer>
        );
    }
}
export default Footer;