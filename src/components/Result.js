import { useNavigate, useParams } from "react-router-dom";
import "./Result.css";

function Result(){
    const navigate = useNavigate();
    const{result} = useParams();
    const handleClick = ()=>{
        navigate("/");
    }

    return(
        <div className="result">
            <h1>{result}</h1>
            <button onClick={handleClick}>Play Again</button>
        </div>
    );
}

export default Result;