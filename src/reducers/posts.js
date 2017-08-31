import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from 'actions/actionTypes';

export const posts = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
    case GET_POSTS_FAILURE:
        return { ...state, status: 'error' };

    case GET_POSTS_REQUEST:
        return { ...state, status: 'loading' };

    case GET_POSTS_SUCCESS:
        return { ...state, status: 'done', posts: payload };

    default:
        return state;
    }
};
