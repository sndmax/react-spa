import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'views/Nav';
import './MainLayout.scss';

const ABOUT_TITLE = 'About';
const BLOG_TITLE = 'Blog';
const SIGN_UP_TITLE = 'Sign Up';

export const links = [
    {
        title: ABOUT_TITLE,
        href: '/about'
    },
    {
        title: BLOG_TITLE,
        href: '/posts'
    },
    {
        title: SIGN_UP_TITLE,
        href: '/signup'
    }
];

class MainLayout extends Component {
    render() {
        const { children } = this.props;

        return (
            <div className="app">
                <header className="app-header">
                    <Link className="app-logo" to="/">
                        <img height="180" src="https://images.vexels.com/media/users/3/128278/isolated/preview/e4c80f11e352aad346c0c51d5207315b-mountain-camping-badge-by-vexels.png" />
                    </Link>
                    <Nav links={links} />
                </header>
                <main id="page">
                    {children}
                </main>
            </div>
        );
    }
}


export default MainLayout;
