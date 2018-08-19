import React from "react";
import ReactDOM from "react-dom";

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            audio: { blue: "sounds/simonSound1.mp3", yellow: "sounds/simonSound2.mp3", green: "sounds/simonSound3.mp3", red: "sounds/simonSound4.mp3" }, 
        points: 0, 
        sequence: [], 
        humanPlayer: false };
    }
    playSound(){
        
    }
    render(){
        return(
        <div>
            <button className="btn animated" onClick={playSound} id="blue" />
            <button className="btn animated" id="red" />
            <button className="btn animated" id="yellow" />
            <button className="btn animated" id="green" />
        </div>
        )
    }
}

export default Game;