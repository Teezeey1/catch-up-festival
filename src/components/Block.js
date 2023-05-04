import "./Block.css";

function Block({numberOfBlock,getBlock}){
    //pass in the the number* however much pixel as the width
    const num = numberOfBlock;
    const blockLength = num*20;

    const colorMatch = {
        1:"white",
        2:"red",
        3:"green",
        4:"pink",
        5:"yellow",
        6:"darkgreen",
        7:"gray",
        8:"brown",
        9:"purple",
        10:"lightblue",
        11:"blue",
        12:"orange"
    }

  
    const handleDrag = (event) => { 
        getBlock(event.target);
    };

    return(
        <div className="block" style={{width:blockLength,backgroundColor:colorMatch[num]}} draggable
        onDragStart={handleDrag} value = {num}>
             <h3>{num}</h3>
        </div>
    );
}

export default Block;