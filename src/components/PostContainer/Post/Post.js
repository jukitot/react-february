import React from 'react';

const Post = ({post, getCurrentPost}) => {
    const {id, title} = post;
    return (
        <div>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <button onClick={()=>getCurrentPost(post)}>Details</button>
        </div>
    );
};

export {Post};