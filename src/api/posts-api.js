import axios from 'axios';
import store from '../store';
import { getPostsSuccess } from '../actions/post-actions';

export function getPosts() {
    return axios.get('../posts.json', {responseType: 'json'})
        .then(response => {
            store.dispatch(getPostsSuccess(response.data.posts))
        });
}
