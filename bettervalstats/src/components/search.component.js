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
        <div className="object-cover flex justify-center h-screen overflow-hidden">
            <div className='object-cover flex-col my-80 '>
                <h1 className='text-left text-white text-3xl font-bold'>Better VLR Stats</h1>
                <input value={this.state.inputValue} onChange={this.update}
                className="h-12 bg-gray-700 border-2 px-2 rounded-lg relative w-96  text-white" 
                placeholder='Search for Player...' list="names"></input>
                <datalist id='names'>
                    {this.state.names.map((name) =>
                        <option value={name}>{name}</option>
                    )}
                </datalist>
                <Link to={`/player/${this.state.inputValue}`}className='ml-5 bg-slate-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded'>
                    Search</Link>
            </div>
        </div>

    )}
}