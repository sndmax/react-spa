import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { user, profile } from './user';
import { post, posts } from './posts';
import { tags } from './tags';

const reducers = combineReducers({
    tags,
    profile,
    user,
    post,
    posts,
    form: reduxFormReducer
});

export default reducers;
