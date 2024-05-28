import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Signin from "./component/home/Signin";
import Home from "./component/home/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign" element={<Signin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
