import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./OneCath.css";
import Footer from "../footer/Footer";

const OneCategory = () => {
  const location = useLocation();
  const { cat } = location.state;

  return (
    <div>
      <Navbar />
      <div className="onecats-container">
        {cat.map((el) => {
          return (
            <div
              className="container"
              style={{
                background: `url(${el.imgUrl})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="overlay">
                <div className="items" />
                <div className="items head">
                  <p>{el.name}</p>
                  <hr />
                </div>
                <div className="items price">
                  <p className="old">$699</p>
                  <p className="new">${el.price}</p>
                </div>
                <div className="items cart">
                  <i className="fa fa-shopping-cart" />
                  <span>ADD TO CART</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <Footer />; */}
    </div>
  );
};

export default OneCategory;
