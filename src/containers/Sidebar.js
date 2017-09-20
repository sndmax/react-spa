import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTags } from 'actions/tags';
import PreLoader from 'views/PreLoader';
import Tags from 'views/Tags';
import SidebarPosts from 'views/SidebarPosts';
import SearchBar from 'views/SearchBar';

class Sidebar extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getTags());
    }

    initTags() {
        const { tagsStatus, tags } = this.props;

        switch (tagsStatus) {
            case 'ERROR':
                return <p>There was an error loading the tags</p>;

            case 'LOADING':
                return <PreLoader />;

            case 'DONE':
                return <Tags type="sidebar" tags={ tags } />;

            default:
                return <PreLoader />;
        }
    }

    initPopular() {
        return (
            <section>
                <SidebarPosts />
            </section>
        );
    }

    render() {
        return (
            <div className="sidebar center-xs">
                <SearchBar />
                { this.initPopular() }
                { this.initTags() }
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
