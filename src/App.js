import "./App.css";
import React from "react";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Homepage from "./components/HomePage/HomePage";
import Card from "./components/layout/Card";
import SearchResult from "./components/SearchResult/SearchResult";
import Study from "./components/Study/Study"
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import CompleteBuy from "./components/CompleteBuy/CompleteBuy";
import Course from "./components/Course/Course";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/Home" element={<Homepage/>}/>
        <Route path="/Cart" element={<Cart/>}/> 
        <Route path="/Checkout" element={<Checkout/>}/>
        <Route path="/CompleteBuy" element={<CompleteBuy/>}/>
        <Route path="/Course" element={<Course/>}/>
        <Route path="/Study" element={<Study/>}/>
        <Route path="/SearchResult" element={<SearchResult/>}/>
      </Routes>

    </div>
  );
}

export default App;
