import React from 'react';

const PlayerProfile = props => {
    return(
        <div className='flex justify-center'>
            <div className='flex-col'>
                <h1 className='text-white text-3xl text-center'>{props.player.name}</h1>
                <h1 className='text-white text-3xl text-center'>{props.player.team}</h1>
            </div>
        </div>

    )
}

export default PlayerProfile
