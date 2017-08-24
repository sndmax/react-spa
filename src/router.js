import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import MainLayout from 'layouts/MainLayout';

import Home from 'views/Home';
import About from 'views/About';
import PostListContainer from 'containers/PostListContainer';

export default (
    <BrowserRouter>
        <MainLayout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/posts" component={PostListContainer} />
            </Switch>
        </MainLayout>
    </BrowserRouter>
);
