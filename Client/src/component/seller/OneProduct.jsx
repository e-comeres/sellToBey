import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import Footer from '../footer/Footer'
import './OneProduct.css';

const OneProduct = () => {
    const location = useLocation();
    const { product } = location.state;
    const navigate = useNavigate();

    const confirmDelete = () => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            remove();
        }
    };

    const remove = () => {
        axios.delete(`http://localhost:4000/api/seller/${product.id}`)
            .then(response => {
                console.log('Product deleted');
                alert('Product deleted successfully');
                navigate('/seller'); 
            })
            .catch(error => {
                console.error('Error deleting product:', error);
                alert('Failed to delete product');
            });
    };

    const edit = () => {
        navigate(`/sellerEdit`, { state: { product:product } });
    };

    return (
        <div>
            <Navbar />
            <div id="one">
                <div className="product-container">
                    <div className="product-details">
                        <div className="product-image-container">
                            <img src={product.imgUrl} alt={product.name} className="product-image" />
                        </div>
                        <div className="button-container">
                            <button onClick={edit} className="edit-button">
                                Edit
                            </button>
                            <button onClick={confirmDelete} className="delete-button">
                                Delete
                            </button>
                        </div>
                        <div className="product-info">
                            <h2>{product.name}</h2>
                            <p className="product-category">{product.category}</p>
                            <p className="product-price">${product.price}</p>
                            <p>{product.description}</p>
                            <p><strong>Condition:</strong> {product.condition}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default OneProduct;
