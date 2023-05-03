import "./GameBoard.css";
import BlockHolder from "./BlockHolder";
import Turn from "./Turn";
import { useState } from 'react';
import { useParams } from "react-router-dom";

function GameBoard() {

  const[player1Turn,setPlayer1Turn] = useState(true);

   const {blockNumber} = useParams();

  const handleTurnChange = ()=>{
      setPlayer1Turn(!player1Turn);
  }

  return (
    <div className='gameBoard'>
      <Turn player1Turn = {player1Turn}></Turn>
      <BlockHolder numberOfBlock={Number(blockNumber)} player1Turn = {player1Turn} handleTurnChange={handleTurnChange}></BlockHolder>
     </div>
  );
}

export default GameBoard;
