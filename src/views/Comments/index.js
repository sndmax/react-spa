import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

class Comment extends Component {
    render() {
        const { comments } = this.props;

        const commentList = comments.map(({ id, author_id, post_id, date, text }) => {
            return (
                <div key={id}>
                    <p>{author_id} - {post_id} - <Moment format="DD MMM YYYY hh:mm" unix>{date}</Moment>: {text}</p>
                </div>
            );
        });

        return (
            <div>
                {commentList}
            </div>
        );
    }
}

export default Comment;
