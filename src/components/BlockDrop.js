import { useEffect, useState } from "react";
import "./BlockDrop.css";

function BlockDrop({numberOfBlock,blockDrop,player1Turn,handleTurnChange}){

    const length = numberOfBlock*4*20;

    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);

    const handleDragOver = (event) => {
      event.preventDefault();
    };

    useEffect(()=>{
      if(count1>=count2 && player1Turn && count1!== 0){
        handleTurnChange();
      }
      else if (count2>=count1 && !player1Turn){
        handleTurnChange();
      }
    },[count1,count2]);

    const handleDrop = (event) => {
      event.preventDefault();
      if(event.target.className === "player1bar" && player1Turn){
        event.target.appendChild(blockDrop);
        setCount1(count1 + Number(blockDrop.getAttribute("value")));
      }
      else if (event.target.className === "player2bar" && player1Turn){
        alert("It is player 1 turn right now");
      }
      if(event.target.className === "player2bar" && !player1Turn){
        event.target.appendChild(blockDrop);
        setCount2(count2 +  Number(blockDrop.getAttribute("value")));
      }
      else if(event.target.className === "player1bar" && !player1Turn){
        alert("It is player 2 turn right now");
      }
    };

    return(
    <div className = "blockDrop"> 
        <div className = "player1">
            <p>Player 1: </p>
            <div className="player1bar" onDragOver={handleDragOver}
                onDrop={handleDrop} style={{width:length,boarder:"1px solid black"}}>
            </div>
            <p>sum: {count1}</p>
        </div>
        <div className = "player2">
            <p>Player 2: </p>
            <div className="player2bar"  style={{width:length,boarder:"1px solid black"}}onDragOver={handleDragOver}
                 onDrop={handleDrop}>
            </div>
            <p>sum: {count2}</p>
        </div>
    </div>
    );
}

export default BlockDrop;