import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";
import Details from "./pages/Details";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/allbeers" element= {<AllBeers />} />
          <Route path="/randombeer" element= {<RandomBeer />} />
          <Route path="/details/:beer" element= {<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
