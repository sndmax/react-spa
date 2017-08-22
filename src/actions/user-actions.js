import { GET_USERS_SUCCESS, USER_PROFILE_SUCCESS } from 'actions/action-types';

export const getUsersSuccess = (users) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: users
    }
};

export const userProfileSuccess = (userProfile) => {
    return {
        type: USER_PROFILE_SUCCESS,
        payload: userProfile
    }
};
