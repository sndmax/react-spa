import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from 'actions/actionTypes';
import { STATUS_ERROR, STATUS_LOADING, STATUS_DONE } from 'actions/actionStatuses';

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
                data: payload
            };

        default:
            return state;
    }
};
