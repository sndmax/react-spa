import React, { Component } from 'react';
import './TagsList.scss';

class TagList extends Component {
    render() {
        const tags = this.props.tags.map(tag => {
            return (<a key={tag.toString()} href="#">
                { tag }
            </a>);
        });
        return (
            <div className="article--tags--sidebar">
                { tags }
            </div>
        );
    }
}

export default TagList;
