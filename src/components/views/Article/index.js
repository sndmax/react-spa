import React, { Component } from 'react';
import Tags from 'views/Tags';
import './Article.scss';

class Article extends Component {
    render() {
        const { id, date, title, author, tags, content } = this.props.post;
        const pub_date = new Date(date * 1000).toDateString();

        return (
            <article className="article-body">
                <header>
                    <div className="article-date">{pub_date}</div>
                    <h1 className="article-title">{title}</h1>
                    <div className="article-info">
                        <a href="#">{author}</a>
                        <span className="article-dot" />
                        <Tags tags={tags} />
                    </div>
                </header>
                <div>
                    <p>{content}</p>
                </div>
            </article>
        )
    }
}

export default Article;
