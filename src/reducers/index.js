import { combineReducers } from 'redux';
import { hasError, isFetching, posts } from './posts';

var reducers = combineReducers({
    posts,
    hasError,
    isFetching
});

export default reducers;
