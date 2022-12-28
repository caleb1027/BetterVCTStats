import React from 'react';

function BigStat(props) {
    return (
        <div className="flex justify-center bg-slate-500 rounded-md m-3 h-24 w-48">
          <div className="flex-col">
            <h3 className="text-xl text-center font-semibold text-white">{props.stat}</h3>
            <h1 className="text-5xl text-center font-bold text-white">{props.value}</h1>
          </div>
        </div>
    )
}

function Stat(props) {
    return (
        <div className="bg-slate-600 w-48">
            <div className='flex-col'>
                <h3 className="text-l text-center font-semibold text-white">{props.stat}</h3>
                <h1 className="text-3xl text-center font-semibold text-white">{props.value}</h1>
            </div>
        </div>
    )
}

const StatSheet = props => {
    return(
        <div className="flex justify-center">
            <div className='w-[70%]"'>
               <h1 className="text-3xl text-left font-semibold text-white h-8 ml-4">Rounds Played: {props.player.rounds}</h1>
                 <div className="flex justify-center h-32 w-[100%]">
                     <BigStat stat="ACS" value={props.player.acs}></BigStat>
                     <BigStat stat="K:D" value={props.player.kd}></BigStat>
                     <BigStat stat="HS %" value={(100* props.player.hsp)}></BigStat>
                 </div>
                <div className=' bg-slate-600 rounded-md p-1'>
                    <div className="flex justify-between mt-3">
                        <Stat stat="KPR" value = {props.player.kpr}></Stat>
                        <Stat stat="APR" value = {props.player.apr}></Stat>
                        <Stat stat="ADR" value = {props.player.adr}></Stat>
                    </div>
                    <div className="flex justify-between my-5">
                        <Stat stat="KAST" value = {props.player.kast}></Stat>
                        <Stat stat="FK:FD" value = {props.player.fkfd}></Stat>
                        <Stat stat="Clutch %" value = {Math.round(100* props.player.clutch)}></Stat>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default StatSheet