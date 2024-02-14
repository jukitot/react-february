import React from 'react';

const Character = ({character}) => {
    const {id, name, status, species, gender, img} = character;

    return (
        <div>
            <div>
                <h2>{id}</h2>
                <h1>{name}</h1>
                <h3>{status}</h3>
                <h4>{species}</h4>
                <h5>{gender}</h5>
                <img src={img}
                     alt={name}/>
            </div>
        </div>
    );
};

export {Character};