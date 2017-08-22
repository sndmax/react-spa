import { GET_POSTS_SUCCESS, POST_SUCCESS } from 'actions/action-types';

const initialState = {
    posts: [],
    post: {
        repos: []
    }
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_SUCCESS:
            return Object.assign({}, state, {posts: action.payload});
        case POST_SUCCESS:
            return Object.assign({}, state, {post: action.payload});
        default:
            return state;
    }
};

export default postReducer;
