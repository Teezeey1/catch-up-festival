import "./Rule.css";
import pic1 from "../Image/fest1.png"
import pic2 from "../Image/fest2.png"
import { useNavigate } from "react-router-dom";

function Rule(){
    const navigate = useNavigate();
    const backToMenu = ()=>{
        navigate('/catch-up-festival');
    }

    return(
        <div className="pdfContainer">
            <div className="header">
                <h1>Rule</h1>
            </div>
            <div className="buttonPosition2">
                 <button onClick={backToMenu}>Back To Menu</button>
            </div>
            <div className="pic1">
                <img src={pic1} alt="placeholder"/>
            </div>
            <div className="pic2">
                <img src={pic2} alt="placeholder"/>
            </div>
        </div>
    );
}

export default Rule;