import React, { Component } from 'react';
import Nav from 'views/Nav';
import Sidebar from 'containers/Sidebar';
import Header from 'views/Header';
import Main from 'views/Main';
import Footer from 'views/Footer';
import './LayoutMain.scss';

class LayoutMain extends Component {
    render() {
        const { children } = this.props;

        return (
            <div className="app">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default LayoutMain;
