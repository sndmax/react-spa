import * as types from '../actions/action-types';

const initialState = {
    users: [],
    userProfile: {
        repos: []
    }
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USERS_SUCCESS:
            return Object.assign({}, state, {users: action.users});
        case types.USER_PROFILE_SUCCESS:
            return Object.assign({}, state, {userProfile: action.userProfile});
        default:
            return state;
    }
};

export default userReducer;
