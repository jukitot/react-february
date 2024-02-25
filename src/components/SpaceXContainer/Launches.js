import React, {useEffect, useState} from 'react';
import {launchService} from "../../services/launchService";
import {Launch} from "./Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([]);
    useEffect(()=>{
        launchService.getAll()
            .then(({data})=>{
                const filtered = data.filter(item => item.launch_year !== '2020');
                setLaunches(filtered)
            })
    },[])
    return (
        <div>
            {launches.map(launch => <Launch key={launch.id} launch={launch}/> )}
        </div>
    );
};

export {Launches};