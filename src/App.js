import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import GameBoard from "./components/GameBoard";
import Result from "./components/Result";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = '/' element={<Login></Login>}></Route>
        <Route exact path = '/catch-up-festival' element={<Login></Login>}></Route>
        <Route path = '/GameBoard/:blockNumber' element = {<GameBoard></GameBoard>}></Route>
        <Route path= '/Result/:result' element={<Result></Result>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
