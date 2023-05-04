import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
function Login(){

    const navigate = useNavigate();
    const [blockNumber,setBlockNumber] = useState(0);

    const toRule = ()=>{
        navigate('/Rule');
    }

    const handleClick = ()=>{
        if(blockNumber<5 || blockNumber >12){
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
            <div className="loginHeader">
                <h1>Catch-Up-Festival</h1>
            </div>
            <div className="rule">
               <button onClick={toRule} className="ruleButton">Rule</button>
            </div>
            <div className="loginContent">
                <h1>Please enter the amount of block you want to play (number between 5 and 12)</h1>
                <input type="number" onChange={handleChange}></input>
                <button onClick={handleClick}>Play!</button>
            </div>

        </div>
    );
}

export default Login;