import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from 'views/Article';
import PreLoader from 'views/PreLoader';
import * as postApi from 'api/posts-api';

class PostContainer extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        postApi.getPost(id);
    };

    render() {
        const { post } = this.props;

        if(!post)
            return <PreLoader />;

        return <Article post={post} />
    }
}

const mapStateToProps = (store) => {
    return {
        post: ( store.postState !== null  ) ? store.postState.post : null
    }
};

export default connect(mapStateToProps)(PostContainer);
