import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tags from 'views/Tags';
import './Articles.scss';

class Articles extends Component {
    render() {
        const posts = this.props.posts;
        const symbolsAmount = 300;

        return (
            <div>
                {posts.map(({ id, date, title, author, tags, content }) => {
                    const pub_date = new Date(date * 1000).toDateString();
                    const shortContent = content.substr(0, symbolsAmount);

                    return (
                        <article key={id.toString()} className="article-body">
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
                                <p>{shortContent}...</p>
                                <p><Link to={"/post/" + id} className="article-more">Read More <span className="article-arrow" /></Link></p>
                            </div>
                        </article>
                    )
                })}
            </div>

        )
    }
}

export default Articles;
