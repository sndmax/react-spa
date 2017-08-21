import React from 'react';

export default (props) => {
    return (
        <div>{props.posts.map(post => {
            return (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <div>{post.content}</div>
                </div>
            )
        })}</div>
    );
}
