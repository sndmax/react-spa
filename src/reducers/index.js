import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { auth } from './signup';
import { posts } from './posts';
import { tags } from './tags';
import { populars } from './popular';

const reducers = combineReducers({
    tags,
    populars,
    auth,
    posts,
    form: reduxFormReducer
});

export default reducers;
