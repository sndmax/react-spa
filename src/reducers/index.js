import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { user, session } from './user';
import { post, posts } from './posts';
import { tags } from './tags';

const reducers = combineReducers({
    tags,
    session,
    user,
    post,
    posts,
    form: reduxFormReducer
});

export default reducers;
