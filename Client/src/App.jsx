import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Signin from "./component/home/Signin";
import Home from "./component/home/Home";
import Admin from "./component/admin/adminapp";
import Getprodact from "./component/admin/prodacts/getprodact";
import Getusers  from "./component/admin/users/getusers";
// import Getseller  from "./component/admin/seller/getseller";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign" element={<Signin />} />
          <Route exact path="/admin" element={<Admin/>}/>
          <Route exact path="/allprodact" element={<Getprodact/>} />
          <Route exact path="/alluseres" element={<Getusers/>} />
          {/* <Route exact path="/allseller" element={<Getseller/>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
