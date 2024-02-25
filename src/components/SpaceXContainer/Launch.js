import React from 'react';

const Launch = ({launch}) => {
    const {mission_name, launch_year, links:{mission_patch_small:img}} = launch;
    return (
        <div>
            <div>Mission Name: {mission_name}</div>
            <div>Launch Year: {launch_year}</div>
            <img src={img} alt={mission_name}/>

        </div>
    );
};

export {Launch};