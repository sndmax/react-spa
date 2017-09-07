import React, { Component } from 'react';
import { connect } from 'react-redux';
import Articles from 'views/Articles';
import PreLoader from 'views/PreLoader';
import { getPosts } from 'actions/posts';

class PostsContainer extends Component {

    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(getPosts());
    };

    getContent() {
        const { status, posts } = this.props;

        switch(status) {
            case 'ERROR':
                return <p>There was an error loading the items</p>;

            case 'LOADING':
                return  <PreLoader />;

            case 'DONE':
                return <Articles posts={posts} />;
        }
    }

    render() {
        return (
            <section className="articles">
                { this.getContent() }
            </section>
        );
    }
}

const mapStateToProps = (store) => {
    console.log(store);
    return {
        posts: store.posts.items,
        status: store.posts.status
    }
};

export default connect(mapStateToProps)(PostsContainer);
