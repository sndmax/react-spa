import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as titles from './NavConstants';
import './Nav.scss';

class Nav extends Component {
    render() {
        const { user } = this.props;
        const pages = [
            {
                title: titles.ABOUT_TITLE,
                link: '/about'
            },
            {
                title: titles.BLOG_TITLE,
                link: '/posts'
            },
            {
                title: titles.CONTACT_TITLE,
                link: '/'
            }
        ];

        const login = user ? {
            title: user.email,
            link: '/userpage'
        } : {
            title: titles.SIGN_UP_TITLE,
            link: '/signup'
        };

        pages.push(login);

        const links = pages.map(
            ({ title, link }) => <Link key={title.toString()} to={link}>{title}</Link>
        );

        return (
            <aside className="nav">
                {links}
            </aside>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        user: store.auth.data
    };
};

export default connect(mapStateToProps)(Nav);
