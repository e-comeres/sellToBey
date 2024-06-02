import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import Footer from '../footer/Footer';

const EditSellerProduct = () => {
    const location = useLocation();
    const { product: locationProduct } = location.state; 
    const [editedProduct, setEditedProduct] = useState(locationProduct);
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState(locationProduct.imgUrl); 
    const navigate = useNavigate(); 

    const updateProduct = () => {
        axios
            .put(`http://localhost:4000/api/seller/${locationProduct.id}`, editedProduct)
            .then(() => {
                alert('Product updated successfully');
                navigate('/seller');
            })
            .catch(error => {
                console.error('Error updating product:', error);
                alert('Failed to update product');
            });
    };

    const edit = e => {
        const { name, value } = e.target;
        setEditedProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const uploadImage = (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'bacemsl');
        return axios.post(`https://api.cloudinary.com/v1_1/dfcbjchqa/image/upload`, formData)
            .then(response => {
                const imageUrl = response.data.secure_url;
                return imageUrl;
            })
            .catch(error => {
                console.error('Error uploading image:', error);
                alert('Failed to upload image');
            });
    };
    

    const fileChange = e => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        uploadImage(selectedFile)
            .then(imageUrl => {
                setUrl(imageUrl);
                setEditedProduct(prevProduct => ({
                    ...prevProduct,
                    imgUrl: imageUrl
                }));
            });
    };
    

    const confirmUpdate = () => {
        if (window.confirm('Are you sure you want to update this product?')) {
            updateProduct();
        }
    };

    return (
        <div>
            <Navbar />
            <div className="edit-container">
                <h1>Edit Product</h1>
                <div className="form-container">
                    <label>
                        Product Name:
                        <input type="text" name="name" value={editedProduct.name} onChange={edit} placeholder="Product Name" />
                    </label>
                    <label>
                        Category:
                        <input type="text" name="category" value={editedProduct.category} onChange={edit} placeholder="Category" />
                    </label>
                    <label>
                        Price:
                        <input type="number" name="price" value={editedProduct.price} onChange={edit} placeholder="Price" />
                    </label>
                    <label>
                        Description:
                        <input type="text" name="description" value={editedProduct.description} onChange={edit} placeholder="Description" />
                    </label>
                    <label>
                        Condition:
                        <input type="text" name="condition" value={editedProduct.condition} onChange={edit} placeholder="Condition" />
                    </label>
                    <label>
                        Image URL:
                        <input type="text" name="imgUrl" value={url} onChange={edit} placeholder="Image URL" />
                    </label>
                    <label>
                        Upload New Image:
                        <input type="file" onChange={fileChange} />
                        {file && <img src={URL.createObjectURL(file)} alt="Try again" style={{ width: '100px', height: 'auto' }} />}
                    </label>
                    <button onClick={confirmUpdate}>Update</button>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default EditSellerProduct;
