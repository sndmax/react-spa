import React, { Component } from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.post.title}</h1>
                <p>{this.props.post.content}</p>
                <p>{this.props.post.date} | {this.props.post.author}</p>
            </div>
        );
    }
}

const posts = [
    {
        title: 'title1',
        author: 'author1',
        date: 'date1',
        content: 'content1'
    },
    {
        title: 'title2',
        author: 'author2',
        date: 'date2',
        content: 'content2'
    }
];

class Blog extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                {
                    posts.map((post) => (
                        <Post key={post.title.toString()} post={post} />
                    ))
                }
            </div>
        );
    }
}

export default Blog;