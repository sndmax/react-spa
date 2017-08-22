import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import MainLayout from './components/layouts/main-layout';

import About from './components/views/about';
import PostListContainer from './components/containers/post-list-container';

export default (
    <BrowserRouter>
        <MainLayout>
            <Switch>
                <Route exact path="/" />
                <Route path="/about" component={About} />
                <Route path="/posts" component={PostListContainer} />
            </Switch>
        </MainLayout>
    </BrowserRouter>
);
