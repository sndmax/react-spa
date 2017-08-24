import React, { Component } from 'react';

class Tags extends Component {
    render() {
        const { tags } = this.props;
        return (
            <span>
                {tags.map(tag => {
                    return <a key={tag.toString()}><span>{tag}</span></a>
                })}
            </span>
        );
    }
}

export default Tags;
