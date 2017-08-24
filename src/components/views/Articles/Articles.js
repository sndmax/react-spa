import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tags from 'views/Tags';
import './Articles.scss';

class Articles extends Component {
    render() {
        const posts = this.props.posts,
            symbolsAmount = 300;

        return (
            <section>
            {posts.map(({ id, date, title, author, tags, content }) => {
                let pub_date = new Date(date * 1000);

                return (
                    <article key={id.toString()} className="article-body">
                        <header>
                            <div className="article-date">{pub_date.toDateString()}</div>
                            <h1 className="article-title">{title}</h1>
                            <div className="article-info">
                                <a href="#">{author}</a>
                                <span className="article-dot" />
                                <Tags tags={tags} />
                            </div>
                        </header>
                        <div>
                            <p>{content.substr(0, symbolsAmount)}...</p>
                            <p><Link to={"/post/" + id} className="article-more">Read More <span className="article-arrow" /></Link></p>
                        </div>
                    </article>
                )
            })}
            </section>

        )
    }
}

export default Articles;
