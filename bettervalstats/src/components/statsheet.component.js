// import React, { Component } from 'react';

// function BigStat(props) {
//     return (
//         <div class="bigStat">
//             <h3 class="bigStatType">{props.stat}</h3>
//             <h1 class="bigStatValue">{props.value}</h1>
//         </div>
//     )
// }

// function Stat(props) {
//     return (
//         <div class="stat">
//             <h3 class="statType">{props.stat}</h3>
//             <h1 class="statValue">{props.value}</h1>
//         </div>
//     )
// }

// export default class StatSheet extends Component {

//     render() {
//         return (
//             <div class="statSheet">
//                 <h1 class="heading">Rounds Played: {this.props.playerStats[0]}</h1>
//                 <div class="bigRow">
//                     <BigStat stat="ACS" value={this.props.playerStats[1]}></BigStat>
//                     <BigStat stat="K:D" value={this.props.playerStats[2]}></BigStat>
//                     <BigStat stat="HS %" value={this.props.playerStats[7]}></BigStat>
//                 </div>
//                 <div class="smallRow">
//                     <Stat stat="KPR" value = {this.props.playerStats[3]}></Stat>
//                     <Stat stat="APR" value = {this.props.playerStats[4]}></Stat>
//                     <Stat stat="ADR" value = {this.props.playerStats[6]}></Stat>
//                 </div>
//                 <div class="smallRow">
//                     <Stat stat="KAST" value = {this.props.playerStats[5]}></Stat>
//                     <Stat stat="FK:FD" value = {this.props.playerStats[8]}></Stat>
//                     <Stat stat="Clutch %" value = {this.props.playerStats[9]}></Stat>
//                 </div>
//             </div>
//         )
//     }
// }