import React from 'react';

const User = ({user, getCurrentUser}) => {
    const {id, name} = user;

    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <button onClick={() => getCurrentUser(user)}>Details</button>

        </div>
    );
};

export {User};