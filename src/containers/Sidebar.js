import React, { Component } from 'react';
import SearchBar from 'views/SearchBar';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar center-xs">
                <SearchBar />
                <h2>Popular posts</h2>
                <p>...</p>
                <h2>Tags</h2>
                <p>...</p>
            </div>
        );
    }
}

export default Sidebar;
