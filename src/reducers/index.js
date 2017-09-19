import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { auth } from './signup';
import { posts } from './posts';
import { tags } from './tags';

const reducers = combineReducers({
    tags,
    auth,
    posts,
    form: reduxFormReducer
});

export default reducers;
