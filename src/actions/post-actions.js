import { GET_POSTS_SUCCESS, GET_POSTS_WAITING, POST_SUCCESS, POST_WAITINIG } from 'actions/action-types';

export const getPostsSuccess = (posts) => {
    return {
        type: GET_POSTS_SUCCESS,
        payload: posts
    }
};

export const getPostsWaiting = () => {
    return {
        type: GET_POSTS_WAITING,
        payload: null
    }
};

export const postSuccess = (post) => {
    return {
        type: POST_SUCCESS,
        payload: post
    }
};

export const postWaiting = () => {
    return {
        type: POST_WAITINIG,
        payload: null
    }
};
