import { useState } from 'react'
import './App.css'
import {gamePage, resultPage, startPage} from "./utils/constants.js";
import Game from "./components/Game.jsx";
import Result from "./components/Result.jsx";
import Start from "./components/Start.jsx";

function App() {
    const [page, setPage] = useState(startPage);
    const [name, setName] = useState("YOU");
    const [currentScore, setCurrentScore] = useState(0);

    const changeName = (name) => {
     if (name) {
         setName(name);
     }
    }

switch (page) {
    case gamePage: return <Game currentScore={currentScore} setCurrentScore={setCurrentScore} changePage={setPage} name={name}/>
    case resultPage: return <Result currentScore={currentScore} setCurrentScore={setCurrentScore} changePage={setPage} name={name}/>
    default: return <Start changePage={setPage} changeName={changeName}/>
    }
}

export default App
