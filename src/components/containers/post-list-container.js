import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from '../views/post-list';
import store from '../../store';
import { getPostsSuccess } from '../../actions/post-actions';

class PostListContainer extends Component {

    componentDidMount() {
        store.dispatch(getPostsSuccess('posts'))
    };

    render() {
        return (
            <PostList/>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        posts: store.postState.posts
    }
};

export default connect(mapStateToProps)(PostListContainer);
