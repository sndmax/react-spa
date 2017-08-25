import React, { Component } from 'react';
import { connect } from 'react-redux';
import Articles from 'views/Articles';
import PreLoader from 'views/PreLoader';
import { getPosts } from 'actions/posts';

class PostListContainer extends Component {

    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(getPosts('http://localhost:9000/posts.json'));
    };

    render() {
        const { hasError, isFetching, posts } = this.props;

        return (
            <div>
                { hasError && <p>There was an error loading the items</p> }
                { isFetching && <PreLoader /> }
                { posts && <Articles posts={posts.posts} /> }
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        posts: store.posts.posts,
        hasError: store.hasError,
        isFetching: store.isFetching
    }
};

export default connect(mapStateToProps)(PostListContainer);
