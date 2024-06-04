export const gamePage = "GAME";
export const resultPage = "RESULT";
export const startPage = "START";

export const createRandomDeck = () => {
    const deck = [];
    const suits = ["C","S","H","D"];
    for (let i=0; i<suits.length;i++) {
        for (let j = 2; j<=6; j++) {
        deck.push({rank: j, suit: suits[i]})
        }
    }
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    return deck;
}



