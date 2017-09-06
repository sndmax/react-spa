import { GET_SIGN_REQUEST, GET_SIGN_SUCCESS, GET_SIGN_FAILURE } from '../constants/actionTypes';

export const auth = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_SIGN_FAILURE:
            return { ...state, status: 'error', data: payload };

        case GET_SIGN_REQUEST:
            return { ...state, status: 'loading' };

        case GET_SIGN_SUCCESS:
            return { ...state, status: 'done', data: payload };

        default:
            return state;
    }
};