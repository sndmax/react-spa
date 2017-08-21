import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
    return (
        <div className="app">
            <header>
                <aside>
                    <Link to="/home">Home</Link>
                    <Link to="/posts">Posts</Link>
                </aside>
            </header>
            <div>{props.children}</div>
        </div>
    );
};
