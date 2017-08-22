import React, { Component } from 'react';
import './post-list.scss';

class PostList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { posts } = this.props;
        return (
            <div>{posts.map(post => {
                let date = new Date(post.date * 1000);

                return (
                    <article key={post.id} className="article-body">
                        <header>
                            <div className="article-date">{date.toDateString()}</div>
                            <h1 className="article-title">{post.title}</h1>
                            <div className="article-info">
                                <a href="#">{post.author}</a> ● {post.tags.map(tag => {return <a href="#" key={tag.toString()}><span>{tag}</span></a>})}
                            </div>
                        </header>
                        <div>
                            <p>{post.content.substr(0, 300)}...</p>
                            <p><a href="#" className="article-more">Read More →</a></p>
                        </div>
                    </article>
                )
            })}</div>
        );
    }
}

export default PostList;
