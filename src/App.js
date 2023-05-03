import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import GameBoard from "./components/GameBoard";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = '/' element={<Login></Login>}></Route>
        <Route path = '/GameBoard/:blockNumber' element = {<GameBoard></GameBoard>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
