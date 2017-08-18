import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import MainLayout from './components/layouts/main-layout';

import Home from './components/home';
import PostListContainer from './components/containers/post-list-container';

export default (
    <BrowserRouter>
        <Route component={MainLayout}>
            <Route path="/home" component={Home} />
            <Route path="/posts" component={PostListContainer} />
        </Route>
    </BrowserRouter>
);
