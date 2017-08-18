import { combineReducers } from 'redux';

import userReducer from './user-reducer';
import postReducer from './post-reducer';

var reducers = combineReducers({
    userState: userReducer,
    postState: postReducer
});

export default reducers;
