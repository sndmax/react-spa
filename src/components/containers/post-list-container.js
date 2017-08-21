import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from '../views/post-list';
import * as postApi from '../../api/posts-api';

class PostListContainer extends Component {

    componentDidMount() {
        postApi.getPosts();
        //store.dispatch(getPostsSuccess('posts'))
    };

    render() {
        return (
            <PostList posts={this.props.posts} />
        );
    }
}

const mapStateToProps = (store) => {
    return {
        posts: store.postState.posts
    }
};

export default connect(mapStateToProps)(PostListContainer);
