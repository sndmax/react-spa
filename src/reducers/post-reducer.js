import * as types from '../actions/action-types';

const initialState = {
    posts: [],
    post: {
        repos: []
    }
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_POSTS_SUCCESS:
            return Object.assign({}, state, {posts: action.posts});
        case types.POST_SUCCESS:
            return Object.assign({}, state, {post: action.post});
        default:
            return state;
    }
};

export default postReducer;
