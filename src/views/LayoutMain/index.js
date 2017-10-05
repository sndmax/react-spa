import React, { Component } from 'react';
import Nav from 'views/Nav';
import Sidebar from 'containers/Sidebar';
import Header from 'views/Header';
import Main from 'views/Main';
import Footer from 'views/Footer';
import './LayoutMain.scss';

class LayoutMain extends Component {
    render() {
        const { children } = this.props;

        return (
            <div className="app">
                <Header />
                <main>
                { children }
                <div className="sidebar">
                                   <form action="">
                                       <input type="text" name="search" defaultValue="  Search..."/>
                                   </form>
                                   <div className="posts-list">
                                       <h2>Popular posts</h2>
                                       <ul>
                                           <li><a href="">Post1</a></li>
                                           <li><a href="">Post2</a></li>
                                           <li><a href="">Post3</a></li>
                                           <li><a href="">...</a></li>
                                       </ul>
                                   </div>
                                   <div className="tags-list">
                                       <h2>Tags</h2>
                                       <ul className="tags-list-unordered">
                                           <li><a href="">Tag 11</a></li>
                                           <li><a href="">Tag 22</a></li>
                                           <li><a href="">Tag 33</a></li>
                                           <li><a href="">Tag 11</a></li>
                                           <li><a href="">Tag 22</a></li>
                                           <li><a href="">Tag 33</a></li>
                                       </ul>
                                   </div>
                               </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default LayoutMain;
