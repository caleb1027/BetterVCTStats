// import React, { Component } from 'react';
// import StatSheet from './statsheet.component';
// import PlayerProfile from './playerprofile.component';
// import {Switch, Route, Link} from 'react-router-dom'

// export default class Display extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             name: '',
//             team: '',
//             rounds: 0,
//             acs: 0,
//             kpr:0,
//             apr:0,
//             kd:0,
//             kast:0,
//             adr:0,
//             hsp:0,
//             fkpr:0.0,
//             fkfd:0,
//             clutch:0,
//             picture:'',
//         }
//     }

//     componentDidMount() {
//         this.setState({
//             name: 'test',
//             team: 'test team',
//             rounds: 10,
//             acs: 240,
//             kpr:30,
//             apr:20,
//             kd:10,
//             kast:20,
//             adr:1250,
//             hsp:0.2,
//             fkpr:50.0,
//             fkfd:3,
//             clutch:0.2,
//         })
//     }

//     render() {
//         const playerStats = [this.state.rounds, this.state.acs, this.state.kd,
//                             this.state.kpr, this.state.apr, this.state.kast,
//                             this.state.adr, this.state.hsp, this.state.fkpr,
//                             this.state.fkfd, this.state.clutch];
//         return (
//             // <div class="main">
//             //     <PlayerProfile name={this.state.name} team={this.state.team} pic={this.state.picture}/>
//             //     <StatSheet playerStats={playerStats}/>
//             // </div>
//             <div><h1>Players</h1></div>
            
//         )
//     }


// }