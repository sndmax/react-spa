import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from 'views/post-list';
import * as postApi from 'api/posts-api';

class PostListContainer extends Component {

    componentDidMount() {
        postApi.getPosts();
    };

    render() {
        const { posts } = this.props;
        return (
            <PostList posts={posts} />
        );
    }
}

const mapStateToProps = (store) => {
    return {
        posts: store.postState.posts
    }
};

export default connect(mapStateToProps)(PostListContainer);
