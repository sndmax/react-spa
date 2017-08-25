import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from 'actions/actionTypes';

export const hasError = (state = false, action) => {
    const { type } = action;

    switch (type) {
        case GET_POSTS_FAILURE:
            return true;

        case GET_POSTS_REQUEST:
            return false;

        case GET_POSTS_SUCCESS:
            return false;

        default:
            return state;
    }
};

export const isFetching = (state = false, action) => {
    const { type } = action;

    switch (type) {
        case GET_POSTS_REQUEST:
            return true;

        case GET_POSTS_FAILURE:
            return false;

        case GET_POSTS_SUCCESS:
            return false;

        default:
            return state;
    }
};

export const posts = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_POSTS_SUCCESS:
            return { ...state, posts: payload };

        default:
            return state;
    }
};
