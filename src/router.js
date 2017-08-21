import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import MainLayout from './components/layouts/main-layout';

import Home from './components/home';
import PostListContainer from './components/containers/post-list-container';

export default (
    <BrowserRouter>
        <MainLayout>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/posts" component={PostListContainer} />
            </Switch>
        </MainLayout>
    </BrowserRouter>
);
