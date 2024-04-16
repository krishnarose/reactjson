import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Wheather from "./Pages/Wheather";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/Wheather" element={<Wheather/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
