import React, {useEffect, useState} from 'react';
import {gamePage} from "../utils/constants.js";
import "../styles/Result.css";

const Result = ({name,changePage,currentScore,setCurrentScore}) => {
    const [greeting, changeGreeting] = useState("");
    const [playerStats, setPlayerStats] = useState({
        games: 0,
        wins: 0,
        losses: 0,
        draws: 0
    });

    useEffect(() => {
        const currentPlayer = `score${name}`;
        const initialPlayerStats = {
            games: 0,
            wins: 0,
            losses: 0,
            draws: 0
        };

        let scoreParse;

        if (!localStorage[currentPlayer]){
            localStorage[currentPlayer]=JSON.stringify(initialPlayerStats);
            scoreParse = initialPlayerStats;
        } else {
        scoreParse = JSON.parse(localStorage[currentPlayer]);
        }

        if (currentScore>0) {
            scoreParse.games += 1;
            scoreParse.losses += 1;
            localStorage[currentPlayer]=JSON.stringify(scoreParse);
            changeGreeting("COMPUTER WON!");
        } else if (currentScore<0) {
            scoreParse.games += 1;
            scoreParse.wins += 1;
            localStorage[currentPlayer] = JSON.stringify(scoreParse);
            changeGreeting("COMPUTER LOST...");
        } else {
            scoreParse.games += 1;
            scoreParse.draws += 1;
            localStorage[currentPlayer]=JSON.stringify(scoreParse);
            changeGreeting("IT'S A TIE!");
        }

        localStorage[currentPlayer] = JSON.stringify(scoreParse);
        setPlayerStats(scoreParse);

    }, [currentScore, name]);

    return (
            <div className="resultContainer">
                <h1>{greeting}</h1>
                <h2>{currentScore}</h2>
                <h2>Your stats: </h2>
                <p>Games: {playerStats.games}</p>
                <p>Wins: {playerStats.wins}</p>
                <p>Losses: {playerStats.losses}</p>
                <p>Draws: {playerStats.draws}</p>
                <button className="againButton" onClick={() => {
                    setCurrentScore(0);
                    changePage(gamePage);
                    changeGreeting("");
                }}>Again
                </button>
            </div>
        );


};

export default Result;