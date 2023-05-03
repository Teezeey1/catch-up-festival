import { useState } from "react";
import Block from "./Block";
import "./BlockHolder.css";
import BlockDrop from "./BlockDrop";


function BlockHolder({numberOfBlock,player1Turn,handleTurnChange}){

    const Array = [];
    for(let i = 0; i < numberOfBlock;++i){
        Array[i] = i + 1
    }
    const [blockDrop,setBlockDrop] = useState();

    const handleBlock = (block) =>{
        setBlockDrop(block);
    }

    const block = Array.map((number)=><Block numberOfBlock={number} key={number} getBlock = {handleBlock}></Block>);

    return(
        <div className="container">
            <div className="blockHolder">
                {block}
            </div>
            <BlockDrop numberOfBlock={numberOfBlock} blockDrop ={blockDrop} player1Turn = {player1Turn} handleTurnChange={handleTurnChange}></BlockDrop>
        </div>
    );

}

export default BlockHolder;