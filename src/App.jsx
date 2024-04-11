import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Shop" element={<Shop/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
