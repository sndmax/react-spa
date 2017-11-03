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
                <main className="container">

                    { children }

                        <div className="c-sidebar col-sm-3 col-xs-12">
                           <form action="" className="col-xs-12">
                               <input type="text" name="search" defaultValue="  Search..." className="col-xs-12"/>
                           </form>
                           <div className="c-sidebar__post-list col-sm-12 col-xs-6">
                               <h2>Popular posts</h2>
                               <ul className="c-sidebar__list col-xs-12">
                                   <li><a href="">Post1</a></li>
                                   <li><a href="">Post2</a></li>
                                   <li><a href="">Post3</a></li>
                                   <li><a href="">...</a></li>
                               </ul>
                           </div>
                           <div className="c-sidebar__tag-list col-sm-12 col-xs-6">
                               <h2>Tags</h2>
                               <ul className="c-sidebar__list col-xs-12">
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
