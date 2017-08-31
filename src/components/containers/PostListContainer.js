import React, { Component } from 'react';
import { connect } from 'react-redux';
import Articles from 'views/Articles';
import PreLoader from 'views/PreLoader';
import { getPosts } from 'actions/posts';

class PostListContainer extends Component {

    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(getPosts('/posts.json'));

    };

    render() {
        const { status, posts } = this.props;

        return (
            <section>
                { (status == 'error') && <p>There was an error loading the items</p> }
                { (status == 'loading') && <PreLoader /> }
                { posts && <Articles posts={posts.posts} /> }
            </section>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        posts: store.posts.posts,
        status: store.posts.status
    }
};

export default connect(mapStateToProps)(PostListContainer);
