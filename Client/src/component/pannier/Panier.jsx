import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./Panier.css";
import { useNavigate } from "react-router-dom";
const Panier = () => {
  const [sel3a, setSel3a] = useState([]);
  const [total, setTotal] = useState(0); // State to store the total sum
  const { user } = useAuth();
  const navigate = useNavigate("");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/panier/usercart/${user.id}`)
      .then((res) => {
        console.log(res.data[0].products, "sel3a");
        setSel3a(res.data[0].products);
        // Calculate the total sum
        const sum = res.data[0].products.reduce(
          (acc, product) => acc + product.price,
          0
        );
        setTotal(sum);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="panier-container">
      <h2>Panier</h2>
      <div className="products-container">
        {sel3a.map((el) => (
          <div key={el.id} className="product-item">
            <h3>{el.name}</h3>
            <img src={el.imgUrl} alt="" />
            <p>{el.price}</p>
          </div>
        ))}
      </div>
      <div>
        <button
          style={{ marginTop: "100px" }}
          className="panier-buton"
          onClick={() => {
            navigate("/");
          }}
        >
          go shopping
        </button>
      </div>
      <div className="total-container">
        <h3>Total: {total} $</h3>
      </div>
    </div>
  );
};

export default Panier;
