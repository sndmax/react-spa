import React, { Component } from 'react';
import Search from 'views/Search';
import './Sidebar.scss';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar center-xs">
                <Search />
                <h2>Popular posts</h2>
                <p>...</p>
                <h2>Tags</h2>
                <p>...</p>
            </div>
        );
    }
}

export default Sidebar;
