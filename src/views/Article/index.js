import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import Tags from 'views/Tags';

class Article extends Component {
    render() {
        const { id, img, date, title, author, tags, content } = this.props.post;
        const symbolsAmount = 300;
        const data = content.substr(0, symbolsAmount) + '...';

        return (
            <article key={id.toString()}>
                <header>
                    <h1 className="article-title"><Link to={"/post/" + id}>{title}</Link></h1>
                    <img alt={title} src={img} className="article-image"/>
                </header>
                <div className="article-content">
                    <p>{data}</p>
                </div>
                <footer>
                    <div className="article-info">
                        <a href><Moment format="DD MMM YYYY" unix>{date}</Moment></a>
                        <a href> by {author}</a>
                        <span className="article-dot" />
                        <Tags tags={tags} />
                    </div>
                </footer>
            </article>
        )
    }
}

export default Article;
