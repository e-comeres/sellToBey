import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SellerInterface() {
  const [sellerProducts, setSellerProducts] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:4000/api/seller`)
      .then(res => {
        console.log(res.data);
        const sortedProducts = res.data.sort((a, b) => b.id - a.id);
        setSellerProducts(sortedProducts);
      })
      .catch(error => console.error(error));
  }, []);

  const SellerId = null;

  return (
    <div>
        <div>
        <Navbar />
        </div>
    <div className="seller-interface-container">
      <div className="navbar-container">
      </div>
      <Link to='/sellerNewProduct' className="post-product-link">
        <h1>Post New Product</h1>
        </Link>
      <h2 className="products-heading">Your Products List</h2>
      <div className="products-container">
        <ul className="products-list">
          {sellerProducts.filter(product => product.SellerId === SellerId).map(product => (
            <li key={product.id} className="product-item">
              <h2 className="product-name">{product.name}</h2>
              <img onClick={()=>navigate('/sellerOneProduct',{state:{product:product}})}  src={product.imgUrl} alt="product" className="product-image" />

            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default SellerInterface;



