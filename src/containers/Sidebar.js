import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTags } from 'actions/tags';
import PreLoader from 'views/PreLoader';
import TagList from 'views/TagList';
import Search from 'views/Search';

class Sidebar extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getTags());
    }

    getContent() {
        const { tagsStatus, tags } = this.props;
        switch(tagsStatus) {
            case 'ERROR':
                return <p>There was an error loading the tags</p>;
            case 'LOADING':
                return <PreLoader />;
            case 'DONE':
                return <TagList tags={ tags } />;
        }
    }

    render() {
        return (
            <div className="sidebar center-xs">
                <Search />
                <h2>Popular posts</h2>
                <p>...</p>
                <h2>Tags</h2>
                <section>
                    { this.getContent() }
                </section>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        tags: store.tags.items,
        tagsStatus: store.tags.status
    };
};

export default connect(mapStateToProps)(Sidebar);

