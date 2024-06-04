import React from 'react';
import {gamePage} from "./utils/constants.js";
import "../styles/Result.css";

const Result = ({name,changePage,currentScore,setCurrentScore}) => {

    let currentPlayer = `score${name}`;
    let initialPlayerStats = {
        games: 0,
        wins: 0,
        losses: 0,
        draws: 0
    };

    if (!localStorage[currentPlayer]){
        localStorage[currentPlayer]=JSON.stringify(initialPlayerStats)
    }

    if (currentScore>0) {
        let scoreParse = JSON.parse(localStorage[currentPlayer]);
        scoreParse.games = scoreParse.games + 1;
        scoreParse.losses = scoreParse.losses + 1;
        localStorage[currentPlayer]=JSON.stringify(scoreParse);

        return (
            <div className="resultContainer">
                <h1>COMPUTER WON!</h1>
                <h2>{currentScore}</h2>
                <h2>Your stats: </h2>
                <p>Games: {scoreParse.games}</p>
                <p>Wins: {scoreParse.wins}</p>
                <p>Losses: {scoreParse.losses}</p>
                <p>Draws: {scoreParse.draws}</p>
                <button className="againButton" onClick={() => {
                    setCurrentScore(0);
                    changePage(gamePage)
                }}>Again
                </button>
            </div>
        );}
    if (currentScore<0) {
        let scoreParse = JSON.parse(localStorage[currentPlayer]);
        scoreParse.games = scoreParse.games + 1;
        scoreParse.wins = scoreParse.wins + 1;
        localStorage[currentPlayer]=JSON.stringify(scoreParse);

        return (
            <div className="resultContainer">
                <h1>COMPUTER LOST...</h1>
                <h2>{currentScore}</h2>
                <h2>Your stats: </h2>
                <p>Games: {scoreParse.games}</p>
                <p>Wins: {scoreParse.wins}</p>
                <p>Losses: {scoreParse.losses}</p>
                <p>Draws: {scoreParse.draws}</p>
                <button className="againButton" onClick={() => {
                    setCurrentScore(0);
                    changePage(gamePage)
                }}>Again
                </button>
            </div>
        );
    } else {
        let scoreParse = JSON.parse(localStorage[currentPlayer]);
        scoreParse.games = scoreParse.games + 1;
        scoreParse.draws = scoreParse.draws + 1;
        localStorage[currentPlayer]=JSON.stringify(scoreParse);
        return (
            <div className="resultContainer">
                <h1>IT'S A TIE!</h1>
                <h2>{currentScore}</h2>
                <h2>Your stats: </h2>
                <p>Games: {scoreParse.games}</p>
                <p>Wins: {scoreParse.wins}</p>
                <p>Losses: {scoreParse.losses}</p>
                <p>Draws: {scoreParse.draws}</p>
                <button className="againButton" onClick={() => {
                    setCurrentScore(0);
                    changePage(gamePage)
                }}>Again
                </button>
            </div>
        );
    }
};

export default Result;