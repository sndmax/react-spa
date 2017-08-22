import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <header>
                    <Link className="app-logo" to="/"><img src="http://placehold.it/200x150" /></Link>
                    <aside>
                        <Link to="/about">About</Link>
                        <Link to="/posts">Blog</Link>
                    </aside>
                </header>
                <main id="page">
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default MainLayout;