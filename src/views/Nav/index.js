import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
    render() {
        const {links} = this.props;

        return (
            <aside className="nav">
                {links.map(({id, title, link}) => {
                    return <Link key={id} to={link}>{title}</Link>
                })}
            </aside>
        )
    }
}

export default Nav;
