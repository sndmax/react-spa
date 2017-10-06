import React, { Component } from 'react';
import PreLoader from 'views/PreLoader';
import Comment from 'views/Comments';
import { connect } from 'react-redux';
import { getComments, addComment } from 'actions/comments';
import {
    STATUS_ERROR,
    STATUS_LOADING,
    STATUS_DONE,
} from 'actions/actionConstants';

class Comments extends Component {
    componentDidMount() {
        const { dispatch, post_id } = this.props;

        const comm = {
            "id": 4,
            "author_id": 2,
            "post_id": 9,
            "date": "1508686093",
            "text": "Comment4"
        };

        //dispatch(addComment(comm));
        dispatch(getComments(post_id));
    }

    loadComments() {
        const { status, comments } = this.props;

        switch (status) {
            case STATUS_ERROR:
                return <p>There was an error loading the items</p>;

            case STATUS_LOADING:
                return <PreLoader />;

            case STATUS_DONE:
                return <Comment comments={comments} />;

            default:
                return <PreLoader />;
        }
    }

    render() {
        return (
            <section>{this.loadComments()}</section>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        comments: store.comments.items,
        status: store.comments.status
    };
};

export default connect(mapStateToProps)(Comments);
