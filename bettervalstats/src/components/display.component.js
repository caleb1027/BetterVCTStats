import React, {useEffect, useState} from 'react';
import PlayerDataService from '../services/player.service'
import GraphDataService from '../services/graph.service'
import { useParams } from "react-router-dom"
import StatSheet from './statsheet.component';
import PlayerProfile from './playerprofile.component';

const Display = props => {
    const [hasLoaded, setHasLoaded] = useState(false);
    let { name } = useParams();
    let [Player, setPlayer] = useState();
    let [graphs, setGraphs] = useState();


    const getPlayer = name => {
        PlayerDataService.findName(name)
        .then(resp => {
            setPlayer(resp.data);            
        })
        .catch(e => {
            console.log(e);
        })
    }

    const getGraph = name => {
        GraphDataService.findName(name)
        .then(resp => {
            setGraphs(resp.data);
            setHasLoaded(true)
        })
        .catch(e => {
            console.log(e);
        })
    }


    useEffect(() => {
        getPlayer(name)
        getGraph(name)
    })

    return(
        hasLoaded ? 
        <div>
            <PlayerProfile player={Player} />
            <StatSheet player={Player}/>
        </div>
        : <p>Loading...</p>
    )
}

export default Display;
