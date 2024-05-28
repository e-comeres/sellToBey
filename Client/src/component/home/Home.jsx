import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import "./Home.css";
import Category from "./Category";
import axios from "axios";
import Footer from "../footer/Footer";
const Home = ({ data }) => {
  const [best, setBest] = useState([]);
  const [flash, setFlash] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/products/condition/best seller`)
      .then((response) => {
        setBest(response.data);
      })
      .catch((err) => {
        console.error(err);
      }),
      axios
        .get(`http://localhost:4000/api/products/condition/flash sells`)
        .then((response) => {
          setFlash(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <input type="radio" name="position" defaultChecked="" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <main id="carousel">
          <div className="item" />
          <main></main>
        </main>
      </div>

      <h2>flash Sells</h2>
      <div className="grid-container">
        {flash.map((el) => {
          return (
            <div className="grid-item">
              <h5>{el.name}</h5>
              <img src={el.imgUrl} alt="" />
              <p>{el.category} </p>
              <p>{el.price}</p>
            </div>
          );
        })}
      </div>
      <div>
        <h2>categories</h2>
        <Category />
      </div>
      <div>
        <h2>Best Seller</h2>
        <div className="grid-container">
          {best.map((el) => {
            return (
              <div className="grid-item">
                <h5>{el.name}</h5>
                <img src={el.imgUrl} alt="" />
                <p>{el.category} </p>
                <p>{el.price}</p>
              </div>
            );
          })}
        </div>
        <h2>explore our products</h2>
        <div className="grid-container">
          {data.map((el) => {
            return (
              <div className="grid-item">
                <h5>{el.name}</h5>
                <img src={el.imgUrl} alt="" />
                <p>{el.category} </p>
                <p>{el.price}</p>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
