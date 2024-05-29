import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import './newProduct.css';

function NewProduct() {
  const [newProduct, setNewProduct] = useState({
    productname: "",
    imgUrl: "",
    category: "",
    price: 0,
    description: "",
  });
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const fillInputs = (event) => {
    const { name, value } = event.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const uploadImage = () => {
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', 'bacemsl');
    return axios.post(`https://api.cloudinary.com/v1_1/dfcbjchqa/image/upload`, form)
      .then(result => {
        const imageUrl = result.data.secure_url;
        setUrl(imageUrl);
        return imageUrl;
      });
  };

  const create = (event) => {
    event.preventDefault();
    uploadImage()
      .then(imageUrl => {
        const productData = { ...newProduct, imgUrl: imageUrl };
        return axios.post(`http://localhost:4000/api/seller`, productData);
      })
      .then(() => {
        alert("Product posted successfully");
        setNewProduct({
          productname: "",
          imgUrl: "",
          category: "",
          price: 0,
          description: "",
        });
        navigate('/seller');
      })
      .catch(error => {
        alert("Oops, something went wrong");
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar />
      <h2>Create Your New Product For Sale</h2>
      <div id='container'>
        <form onSubmit={create}>
          <label>
            Product Name:
            <input
              type="text"
              name="productname"
              value={newProduct.productname}
              onChange={fillInputs}
            />
          </label>
          <label>
            Product Image:
            <input
              type="file"
              name="imgUrl"
              onChange={e => setFile(e.target.files[0])}
            />
            <br />
            <button type="button" onClick={uploadImage}>Upload!</button>
            {url && <img src={url} alt="Uploaded" style={{ width: '100px', height: '100px' }} />}
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={newProduct.description}
              onChange={fillInputs}
            ></textarea>
          </label>
          <label>
            Price:
            <input
              type="number"
              step="0.01"
              name="price"
              value={newProduct.price}
              onChange={fillInputs}
            />
          </label>
          <label>
            Category:
            <input
              type="text"
              name="category"
              value={newProduct.category}
              onChange={fillInputs}
            />
          </label>
          <button type='submit'>Create Product</button>
        </form>
      </div>
    </div>
  );
}

export default NewProduct;
