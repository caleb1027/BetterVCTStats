import React, {useEffect, useState} from 'react';
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import { type } from '@testing-library/user-event/dist/type';

Chart.register(...registerables);

const Graph = props => {
    const [Data, setData] = useState({
            labels: props.games,
            datasets: [{
              label: props.stat,
              data: props.data,
              fill: true,
              borderColor: 'rgb(75, 192, 220)',
            }]
          }
    );

    useEffect(() => {
        setData({
            labels: props.games,
            datasets: [{
              label: props.stat,
              data: props.data,
              fill: true,
              borderColor: 'rgb(75, 192, 220)',
            }]
          })
    }, [props.data]);

    return(
        <div className="w-[98%] h-[24rem] flex justify-center rounded-md m-1">
            <div className="w-[98%] h-[22rem] bg-white flex justify-center rounded-md m-2">
                <Line
                    data = {Data}
                    options={{
                        plugins: {
                            title: {
                            display: true,
                            text: props.name +"'s " + props.stat
                            },
                            legend: {
                            display: false
                            },
                        },
                }}
                />
            </div>
        </div>
    )
}

const GraphContainer = props => {
    const [stat, setStat] = useState("acs")
    const [statTypes] = useState(['acs', 'kast', 'adr', 'hsp', 'k', 'd', 'a']);

    const update = e => {
        setStat(e.target.value)
    }

    return(
        <div className="flex justify-center m-2">
            <div className='w-[700px] h-[28rem] bg-slate-600 flex flex-col justify-center rounded-md'>
                <Graph name={props.player.name} stat={stat.toUpperCase()} data={props.player[stat]} games={props.player.games}/>
                <div className='flex justify-center'>
                    <select value={stat} onChange={update} className='w-[200px] h-[30px] rounded-md text-center'>
                        {statTypes.map((type) =>
                        <option value={type}>{type.toUpperCase()}</option>)}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default GraphContainer;