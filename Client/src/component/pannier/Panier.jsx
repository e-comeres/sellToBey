import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Panier = () => {
  const [sel3a, setSel3a] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/panier/allPanier`)
      .then((res) => {
        console.log(res.data, "sel3a");
        setSel3a(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      {sel3a.map((el) => {
        return <h3>{el.productId}</h3>;
      })}
    </div>
  );
};

export default Panier;
