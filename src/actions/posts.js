import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POST_SUCCESS, GET_POSTS_FAILURE } from 'constants/actionTypes';

const url = '/data.json';

const getPostsRequest = () => {
    return {
        type: GET_POSTS_REQUEST
    }
};

const getPostsSuccess = (posts, isSingle = false) => {
    return {
        type: isSingle ? GET_POST_SUCCESS : GET_POSTS_SUCCESS,
        payload: posts
    }
};

const getPostsFailure = () => {
    return {
        type: GET_POSTS_FAILURE
    }
};

export const getPosts = () => {
    return (dispatch) => {
        dispatch(getPostsRequest());

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((response) => dispatch(getPostsSuccess(response.posts)))
            .catch((response) => dispatch(getPostsFailure(response)));
    };
};

export const getPost = (id) => {
    return (dispatch) => {
        dispatch(getPostsRequest());

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((response) => {
                response.posts.map((post) => {
                    if(id == post.id)
                        dispatch(getPostsSuccess(post, true))
                })
            })
            .catch((response) => dispatch(getPostsFailure(response)));
    }
};
