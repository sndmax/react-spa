import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'views/Nav';
import Sidebar from 'views/Sidebar';
import './LayoutMain.scss';

const ABOUT_TITLE = 'About';
const BLOG_TITLE = 'Blog';
const SIGN_UP_TITLE = 'Sign Up';
const USERPAGE_TITLE = 'User page';

export const pages = [
    {
        id: 1,
        title: ABOUT_TITLE,
        link: '/about'
    },
    {
        id: 2,
        title: BLOG_TITLE,
        link: '/posts'
    },
    {
        id: 3,
        title: SIGN_UP_TITLE,
        link: '/signup'
    },
    {
        id: 4,
        title: USERPAGE_TITLE,
        link: '/userpage'
    }
];

class LayoutMain extends Component {
    render() {
        const { children } = this.props;

        return (
            <div className="app">
                <header className="app__header">
                    <div className="container">
                        <div className="row end-xs middle-xs">
                            <div className="col-xs-2">
                                <Link to="/">
                                    <img height="110" src="/img/logo.jpg" />
                                </Link>
                            </div>
                            <div className="col-xs-10">
                                <Nav links={pages} />
                            </div>
                        </div>
                    </div>
                </header>
                <main className="container app__content">
                    <div className="row">
                        <div className="col-xs-8 app__posts">
                            {children}
                        </div>
                        <div className="col-xs-4">
                            <Sidebar />
                        </div>
                    </div>
                </main>
                <footer className="app__footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 center-xs middle-xs">
                                <span>© 2017 All rights reserved.</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default LayoutMain;
