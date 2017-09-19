import React, { Component } from 'react';
import './Tags.scss';

class Tags extends Component {
    render() {
        const { type, tags } = this.props;
        const links = tags.map((tag) => <a key={tag.toString()} href="#">{tag}</a>);

        switch (type) {
            case 'sidebar':
                return (
                    <section className="tags-wrapper">
                        <h2>Tags</h2>
                        <span className="tags">
                            {links}
                        </span>
                    </section>
                );

            default:
                return <span className="tags">{links}</span>;
        }
    }
}

export default Tags;
