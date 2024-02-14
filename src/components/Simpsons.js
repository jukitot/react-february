import React from 'react';

const Simpsons = ({simpson}) => {
    const{name, title, img} = simpson;
    return (
        <div>
            <h1>{name}</h1>
            <p>{title}</p>
            <img src={img}
                 alt={name}/>

        </div>
    );
};

export {Simpsons};