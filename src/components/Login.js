import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
function Login(){

    const navigate = useNavigate();
    const [blockNumber,setBlockNumber] = useState(0);

    const handleClick = ()=>{
        if(blockNumber<5 || blockNumber >8){
            alert("Please Enter A Number Within Range");
        }
        else{
            navigate('/GameBoard/' + blockNumber);
        }
    }
    

    const handleChange = (e)=>{
        setBlockNumber(e.target.value);
    }

    return(
        <div className="login">
            <h1>Please enter the amount of block you want to play (number between 5 and 8)</h1>
            <input type="number" onChange={handleChange}></input>
            <button onClick={handleClick}>Play!</button>
        </div>
    );
}

export default Login;