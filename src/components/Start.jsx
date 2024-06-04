import React, {useState} from 'react';
import {gamePage} from "../utils/constants.js";
import '../styles/Start.css';

const Start = ({changePage,changeName}) => {
    const [name,setName] = useState("");
    const handleClickStart = () => {
        changePage(gamePage);
        changeName(name);
    }

    return (
        <div className="mainContainer">
            <h1>Ready for War</h1>
            <input className="inputName" value={name}
                onChange={e=>setName(e.target.value.toUpperCase())}
                type={"text"} placeholder={"Enter Your Name"}></input>
            <button className="startButton" onClick={handleClickStart}>Start</button>

        </div>
    );
};

export default Start;