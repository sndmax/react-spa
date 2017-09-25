import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import Tags from 'views/Tags';
import { jsonfile } from 'jsonfile';

class Article extends Component {
    render() {
        const { id, img, date, title, author, tags, content } = this.props.post;
        const file = './data.json';
        jsonfile.readFile(file, (err, obj) => {
            console.dir(obj);
        });

        return (
            <article key={id.toString()}>
                <header>
                    <h1 className="article-title"><Link to={"/post/" + id}>{title}</Link></h1>
                    <img alt={title} src={img} className="article-image"/>
                </header>
                <div className="article-content">
                    <p>{content}</p>
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
        );
    }
}

export default Article;
