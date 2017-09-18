import React, { Component } from 'react';
import './Tags.scss';

class Tags extends Component {
    render() {
        const links = this.props.tags.map(tag => {
            return <a key={tag.toString()} href="#">{tag}</a>
        });

        return (
            <span className="article--tags">
                {links}
            </span>
        );
    }
}

export default Tags;
