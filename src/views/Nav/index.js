import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.scss';

class Nav extends Component {
    render() {
        const { links, user } = this.props;

        if(user) {
            links[3].title = user.email;
        }

        return (
            <aside className="nav">
                {links.map(({id, title, link}) => {
                    return <Link key={id} to={link}>{title}</Link>
                })}
            </aside>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        user: store.auth.data
    }
};

export default connect(mapStateToProps)(Nav);
