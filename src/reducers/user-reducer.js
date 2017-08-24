import { GET_USERS_SUCCESS, USER_PROFILE_SUCCESS } from 'actions/action-types';

const initialState = {
    users: [],
    userProfile: {}
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return { ...state, users: action.payload };
        case USER_PROFILE_SUCCESS:
            return { ...state, userProfile: action.payload };
        default:
            return state;
    }
};

export default userReducer;
