import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as titles from './NavConstants';
import {
    STATUS_DONE,
} from '../../actions/actionConstants';
import './Nav.scss';

class Nav extends Component {
    render() {
        const { status, user } = this.props;
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

        const login = status === STATUS_DONE ? {
            title: user.email,
            link: '/profile'
        } : {
            title: titles.SIGN_UP_TITLE,
            link: '/signup'
        };

        pages.push(login);

        const links = pages.map(
            ({ title, link }) => <Link key={title} to={link}>{title}</Link>
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
        user: store.session.data,
        status: store.session.status
    };
};

export default connect(mapStateToProps)(Nav);
