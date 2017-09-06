import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import MainLayout from 'views/LayoutMain';

import Home from 'views/Home';
import About from 'views/About';
import SignUp from 'views/SignUp';
import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';


export default (
    <BrowserRouter>
        <MainLayout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/posts" component={PostsContainer} />
                <Route path="/post/:id" component={PostContainer} />
                <Route path="/signup" component={SignUp} />
            </Switch>
        </MainLayout>
    </BrowserRouter>
);
