import { GET_USERS_SUCCESS, USER_PROFILE_SUCCESS } from 'actions/action-types';

const initialState = {
    users: [],
    userProfile: {
        repos: []
    }
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return Object.assign({}, state, {users: action.payload});
        case USER_PROFILE_SUCCESS:
            return Object.assign({}, state, {userProfile: action.payload});
        default:
            return state;
    }
};

export default userReducer;
