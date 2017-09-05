import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from 'actions/actionTypes';

const url = '/data.json';

const getPostsRequest = () => {
    return {
        type: GET_POSTS_REQUEST
    }
};

const getPostsSuccess = (posts) => {
    return {
        type: GET_POSTS_SUCCESS,
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
            .then((posts) => dispatch(getPostsSuccess(posts)))
            .catch((response) => dispatch(getPostsFailure()));
    };
};
