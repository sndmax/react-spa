import * as types from '../actions/action-types';

export function getPostsSuccess(posts) {
    return {
        type: types.GET_POSTS_SUCCESS,
        posts
    };
}

export function postSuccess(post) {
    return {
        type: types.POST_SUCCESS,
        post
    }
}
