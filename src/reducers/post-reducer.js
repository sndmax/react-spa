import { GET_POSTS_SUCCESS, GET_POSTS_WAITING, POST_SUCCESS, POST_WAITINIG } from 'actions/action-types';

const initialState = {
    posts: [],
    post: null
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_SUCCESS:
            return { ...state, posts: action.payload };
        case GET_POSTS_WAITING:
            return action.payload;
        case POST_SUCCESS:
            return { ...state, post: action.payload };
        case POST_WAITINIG:
            return action.payload;
        default:
            return state;
    }
};

export default postReducer;
