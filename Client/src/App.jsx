import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Signin from "./component/home/Signin";
import Home from "./component/home/Home";
import axios from "axios";
import OneCategory from "./component/home/OneCategory";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/products")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home data={data} />} />
          <Route exact path="/sign" element={<Signin />} />
          <Route exact path="/oneCath" element={<OneCategory />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
