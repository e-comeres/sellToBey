import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./OneCath.css";
const OneCategory = () => {
  const location = useLocation();
  const { cat } = location.state;
  console.log(cat, "oneCath");
  return (
    <div>
      <Navbar />
      <div className="onecats-container">
        {cat.map((el) => {
          return (
            <div className="onecats">
              <h1> {el.name}</h1>
              <img id="elimg" src={el.imgUrl} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OneCategory;
