import React from 'react';
import GameActions from '../actions/GameActions';
import Game from './Game.jsx';

export default class GamesList extends React.Component {

    constructor() {
        super();
    }

    showRecentGamesFirst(gameNodes) {
        gameNodes.reverse();
    }

    render() {
        let gameNodes = this.props.games.map((game) => {
            return (
                <Game game={game} key={game._id}/>
            )
        });

        this.showRecentGamesFirst(gameNodes);

        return (
            <div>
                <h1 className="header green-text">Previous games</h1>
                <table className="striped">
                    <thead>
                    <tr>
                        <th>Player</th>
                        <th>Player</th>
                        <th>Result</th>
                        <th>When</th>
                    </tr>
                    </thead>
                    <tbody>
                    {gameNodes}
                    </tbody>
                </table>
            </div>
        );
    }
}
