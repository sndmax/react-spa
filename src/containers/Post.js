import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from 'views/Article';
import PreLoader from 'views/PreLoader';
import { getPost } from 'actions/posts';

class Post extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        const { id } = this.props.match.params;

        dispatch(getPost(id));
    }

    getContent() {
        const { status, post } = this.props;

        switch (status) {
            case 'ERROR':
                return <p>There was an error loading the items</p>;

            case 'LOADING':
                return <PreLoader />;

            case 'DONE_SINGLE':
                return <Article post={post} />;

            default:
                return <PreLoader />;
        }
    }

    render() {
        return (
            <section className="article">
                { this.getContent() }
            </section>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        post: store.posts.items,
        status: store.posts.status
    };
};

export default connect(mapStateToProps)(Post);
