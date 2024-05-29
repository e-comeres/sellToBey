import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Signin from "./component/home/Signin";
import Home from "./component/home/Home";
import SellerInterface from "./component/seller/SellerInterface";
import NewProduct from "./component/seller/NewProduct";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign" element={<Signin />} />
          <Route exact path="/seller" element={<SellerInterface/>}/>
          <Route exact path="/sellerNewProduct" element={<NewProduct/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
