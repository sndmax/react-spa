import axios from 'axios';
import store from '../store';
import { getPostsSuccess, getPostsWaiting, postSuccess, postWaiting } from 'actions/post-actions';

export const getPosts = () => {
    return axios.get('../posts.json', { responseType: 'json' })
        .then(response => {
            console.log('Waiting for data...');
            store.dispatch(getPostsWaiting());

            setTimeout(() => {
                console.log('Data received');
                store.dispatch(getPostsSuccess(response.data.posts))
            }, 1000);
        });
};

export const getPost = (id) => {
    return axios.get('../posts.json', { responseType: 'json' })
        .then(response => {
            console.log('Waiting for data...');
            store.dispatch(postWaiting());

            setTimeout(() => {
                console.log('Data received');
                response.data.posts.map((post) => {
                    if(post.id == id)
                        store.dispatch(postSuccess(post))
                });
            }, 1000)
        });
};
