import "./Turn.css";


function Turn({player1Turn}){


    return(
        player1Turn? <div className="player1">
            <h2>player 1's turn </h2>
        </div>:
        
        <div className="player2">
            <h2>player 2's turn </h2>
        </div>
    );
}

export default Turn;