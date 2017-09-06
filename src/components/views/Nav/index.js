import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
    render() {
        const { links } = this.props;
        return (
            <aside className="nav">
                {links.map(({ href, title }) => {
                    return <Link key={title.toString()} to={href}>{title}</Link>
                })}
            </aside>
        )
    }
}

export default Nav;
