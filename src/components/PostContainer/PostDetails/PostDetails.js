import React from 'react';

const PostDetails = ({postDetails}) => {
    const {id, title, body} = postDetails;
    return (
        <div>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export {PostDetails};