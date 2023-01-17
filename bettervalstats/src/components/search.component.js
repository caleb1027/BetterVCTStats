import React, {Component} from 'react';
import PlayerDataService from "../services/player.service"
import {Link} from "react-router-dom"

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players : [],
            names: [],
            inputValue: ""
        }

        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState({inputValue: e.target.value});
    }
    
    componentDidMount() {
        PlayerDataService.getAll()
            .then(response => {
            const playerList = response.data.players;
            const nameList = playerList.map((player) =>
                player.name)
            this.setState({players: playerList,
                names: nameList,
                inputValue: ""});
            })
            .catch(e => {
            console.log(e);
            });
        };


    render() { 
        return (
        <div className="object-cover flex-col justify-center items-center flex">
            <div className='object-cover flex-col flex items-center mt-72 mb-5 w-1/2'>
                <h1 className='text-center text-white text-6xl font-bold'>Valorant Statistics</h1>
                <h1 className='text-center text-white text-8xl font-bold'>made <span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-200 to-blue-600'>better.</span></h1>
            </div>
            <div className='w-1/2 flex items-center object-cover flex-col'>
                <input value={this.state.inputValue} onChange={this.update}
                className="h-16 bg-white border-slate-700 border-2 focus:outline-none relative rounded-full w-2/3 px-[16px]" 
                placeholder='Search for Player' list="names"></input>
                <datalist id='names'>
                    {this.state.names.map((name) =>
                        <option value={name}>{name}</option>
                    )}
                </datalist>
                <Link to={`/player/${this.state.inputValue}`} className='text-lg m-5 text-center w-36 bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-xl'>
                    Search</Link>
            </div>
        </div>

    )}
}