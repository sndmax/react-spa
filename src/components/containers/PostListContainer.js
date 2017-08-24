import React, { Component } from 'react';
import { connect } from 'react-redux';
import Articles from 'views/Articles';
import PreLoader from 'views/PreLoader';
import * as postApi from 'api/posts-api';

class PostListContainer extends Component {

    componentDidMount() {
        postApi.getPosts();
    };

    render() {
        const { posts } = this.props;

        if(!posts)
            return <PreLoader />;

        return (
            <Articles posts={posts} />
        );
    }
}

const mapStateToProps = (store) => {
    return {
        posts: ( store.postState !== null ) ? store.postState.posts : null
    }
};

export default connect(mapStateToProps)(PostListContainer);
