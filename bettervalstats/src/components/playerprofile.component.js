// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// export default class PlayerProfile extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             name: '',
//             team: '',
//             picture: '',
//         }
//     }

//     componentDidMount() {
//         this.setState({
//             name: 'test',
//             team: 'test team',
//             picture: 'https://owcdn.net/img/6399a584cad8b.png'
//         })
//     }

//     render() {
//         return (
//             <div class="playerProfile">
//                 <img class="playerImg"src={this.props.picture}>Picture of {this.props.name}</img>
//                 <h1 class="profileText">{this.props.name}</h1>
//                 <h1 class="profileText">{this.props.team}</h1>
//             </div>
//         )
//     }
// }