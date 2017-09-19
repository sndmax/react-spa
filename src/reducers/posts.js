import {
    STATUS_ERROR,
    STATUS_LOADING,
    STATUS_DONE,
    STATUS_DONE_SINGLE,
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POST_SUCCESS,
    GET_POSTS_FAILURE,
} from '../actions/actionConstants';

export const posts = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_POSTS_FAILURE:
            return {
                ...state,
                status: STATUS_ERROR
            };

        case GET_POSTS_REQUEST:
            return {
                ...state,
                status: STATUS_LOADING
            };

        case GET_POSTS_SUCCESS:
            return {
                ...state,
                status: STATUS_DONE,
                items: payload
            };

        case GET_POST_SUCCESS:
            return {
                ...state,
                status: STATUS_DONE_SINGLE,
                items: payload
            };

        default:
            return state;
    }
};
