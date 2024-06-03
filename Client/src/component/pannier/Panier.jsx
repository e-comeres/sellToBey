import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Panier.css";
import Navbar from "../navbar/Navbar";

const Panier = () => {
  const [sel3a, setSel3a] = useState([]);
  const [total, setTotal] = useState(0);
  const [refre, setRefre] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/panier/usercart/${user.id}`)
      .then((res) => {
        console.log(res.data[0].products, "sel3a");
        setSel3a(res.data[0].products);
        const sum = res.data[0].products.reduce((acc, product) => {
          const productTotal = product.price * (product.quantity || 1);
          return acc + productTotal;
        }, 0);
        setTotal(sum);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [refre, user.id]);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedProducts = [...sel3a];
    updatedProducts[index].quantity = newQuantity;

    const newTotal = updatedProducts.reduce((acc, product) => {
      const productTotal = product.price * (product.quantity || 1);
      return acc + productTotal;
    }, 0);

    setSel3a(updatedProducts);
    setTotal(newTotal);
  };
  const remove = (productId) => {
    axios
      .delete(`http://localhost:4000/api/panier/del/${productId}`)
      .then((response) => {
        console.log(response);
        setRefre(!refre);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="panier-container">
        <div className="breadcrumb">
          {/* <span>Home</span> / <span>Cart</span> */}
        </div>
        <h2>Cart</h2>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {sel3a.map((el, index) => (
              <tr key={el.id}>
                <td>
                  <img
                    src={el.imgUrl}
                    alt={el.name}
                    className="product-image"
                  />
                  {el.name}
                </td>
                <td>${el.price}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={el.quantity || 1}
                    onChange={(e) =>
                      handleQuantityChange(index, parseInt(e.target.value))
                    }
                    className="quantity-input"
                  />
                </td>
                <td>${el.price * (el.quantity || 1)}</td>
                <td
                  onClick={() => {
                    remove(el.id);
                  }}
                >
                  X
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="return-button" onClick={() => navigate("/")}>
          Return To Shop
        </button>
        <div className="coupon-container">
          <input
            type="text"
            placeholder="Coupon Code"
            className="coupon-input"
          />
          <button className="apply-coupon">Apply Coupon</button>
        </div>
        <div className="cart-total">
          <h3>Cart Total</h3>
          <p>Subtotal: ${total}</p>
          <p>Shipping: Free</p>
          <p>Total: ${total}</p>
          <button className="checkout-button">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Panier;
