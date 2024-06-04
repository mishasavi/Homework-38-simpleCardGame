import React, {useEffect, useRef, useState} from 'react';
import {createRandomDeck, resultPage} from "../utils/constants.js";
import '../styles/Game.css'
const Game = ({changePage,name,currentScore,setCurrentScore}) => {

    const [compCardImage,setCompCardImage] = useState(null);
    const [playerCardImage,setPlayerCardImage] = useState(null);
    const compDeck = useRef([]);
    const playerDeck = useRef([]);

    useEffect(() => {
        const deck = createRandomDeck();
        compDeck.current = deck.slice(0,deck.length/2);
        playerDeck.current = deck.slice(deck.length/2);
        }, []);

    const getCardImagePath = (card) => {
        return `/cards/${card.rank}${card.suit[0].toUpperCase()}.png`;
    };

    const handleClickNext = () => {
        let score = currentScore;
        if(compDeck.current.length) {
           const player = playerDeck.current.pop();
           const comp = compDeck.current.pop();
           if(player.rank > comp.rank) {
               setCurrentScore(score-1);
           }
           if(player.rank < comp.rank) {
               setCurrentScore(score+1);
           }
           setCompCardImage(getCardImagePath(comp));
           setPlayerCardImage(getCardImagePath(player));
        } else
        changePage(resultPage);
    }

    return (
        <div className="gameContainer">
            <h2>COMP</h2>
            {compCardImage ? <img src={compCardImage} alt="Computer Card" /> : <img src="cards/faceDown.png" alt="card"/>}
            <p>{currentScore}</p>
            {playerCardImage ? <img src={playerCardImage} alt="Player Card" /> :
                <img src="cards/faceDown.png" alt="card"/>}
            <h2>{name}</h2>
            <button className="nextButton" onClick={handleClickNext}>Next</button>
            
        </div>
    );
};

export default Game;