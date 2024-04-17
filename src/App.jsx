import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navcontents from "./components/Navcontents";
import Register from "./components/Register";
import Login from "./components/Login";
import Loginpage from "./components/Loginpage";

function App() {
  return (
    <div className="App">
      <Navcontents />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path='/Navcontents' element={<Navcontents/>}></Route> */}
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
