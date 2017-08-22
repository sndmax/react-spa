import { GET_POSTS_SUCCESS, POST_SUCCESS } from 'actions/action-types';

export const getPostsSuccess = (posts) => {
    return {
        type: GET_POSTS_SUCCESS,
        payload: posts
    }
};

export const postSuccess = (post) => {
    return {
        type: POST_SUCCESS,
        payload: post
    }
};
