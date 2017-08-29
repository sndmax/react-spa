import { combineReducers } from 'redux';
import { isFetching, posts } from './posts';

var reducers = combineReducers({
    posts
});

export default reducers;
