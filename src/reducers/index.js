import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { auth } from './signup';
import { posts } from './posts';

const reducers = combineReducers({
    auth,
    posts,
    form: reduxFormReducer
});

export default reducers;
