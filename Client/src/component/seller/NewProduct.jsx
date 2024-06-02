import React, { useState } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from '../footer/Footer'


function NewProduct() {
  const [newProduct, setNewProduct] = useState({
    productname: "",
    imgUrl: "",
    category: "",
    price: 0,
    description: "",
  });
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
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
    form.append("file", file);
    form.append("upload_preset", "bacemsl");
    return axios
      .post(`https://api.cloudinary.com/v1_1/dfcbjchqa/image/upload`, form)
      .then((result) => {
        const imageUrl = result.data.secure_url;
        setUrl(imageUrl);
        return imageUrl;
      });
  };

  const create = (event) => {
    event.preventDefault();
    uploadImage()
      .then((imageUrl) => {
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
        navigate("/seller");
      })
      .catch((error) => {
        alert("Oops, something went wrong");
        console.error(error);
      });
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="NewProduct">
        <h2>Create New Product For Sale</h2>
        <form onSubmit={create}>
          <fieldset>
            <label className="label">Product Name:</label>
            <input
              className="input"
              type="text"
              name="productname"
              value={newProduct.productname}
              onChange={fillInputs}
            />
          </fieldset>
          <fieldset>
            <label className="label">Product Image:</label>
            <div className="image-input-container">
              <input
                className="input file-input"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
              {url && <img className="small-image" src={url} alt="Uploaded" />}
              <button
                className="button upload-button"
                type="button"
                onClick={uploadImage}
              >
                Upload!
              </button>
            </div>
          </fieldset>
          <fieldset>
            <label className="label">Description:</label>
            <textarea
              className="textarea"
              name="description"
              value={newProduct.description}
              onChange={fillInputs}
            ></textarea>
          </fieldset>
          <fieldset>
            <label className="label">Price:</label>
            <input
              className="input"
              type="number"
              step="0.01"
              name="price"
              value={newProduct.price}
              onChange={fillInputs}
            />
          </fieldset>
          <fieldset>
            <label className="label">Category:</label>
            <input
              className="input"
              type="text"
              name="category"
              value={newProduct.category}
              onChange={fillInputs}
            />
          </fieldset>
          <button className="button" type="submit">
            Create Product
          </button>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default NewProduct;
