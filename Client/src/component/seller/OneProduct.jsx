import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import Footer from '../footer/Footer';
import './OneProduct.css';

const OneProduct = () => {
    const location = useLocation();
    const { product } = location.state;
    const navigate = useNavigate();
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        const fetchRelatedItems = () => {
            axios.get(`http://localhost:4000/api/products`)
                .then(response => {
                    const related = response.data.filter(p => p.category === product.category && p.id !== product.id);
                    setRelatedProducts(related);
                })
                .catch(error => {
                    console.error('Error fetching related products:', error);
                });
        };

        fetchRelatedItems();
    }, [product.category, product.id]);

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
        navigate(`/sellerEdit`, { state: { product: product } });
    };

    return (
        <div>
            <Navbar />
            <div className="breadcrumb">
                <a href="/">Home</a> / <a href="/gaming">Gaming</a> / <span>{product.name}</span>
            </div>
            <div className="product-container">
                <div className="product-details">
                    <div className="product-images">
                        {(product.images || []).map((imgUrl, index) => (
                            <img key={index} src={imgUrl} alt={product.name} className="thumbnail-image" />
                        ))}
                    </div>
                    <div className="main-image-container">
                        <img src={product.imgUrl} alt={product.name} className="main-image" />
                    </div>
                    <div className="product-info">
                        <h1>{product.name}</h1>
                        <div className="product-rating">
                            <span>⭐⭐⭐⭐☆</span> (150 Reviews)
                        </div>
                        <div className="product-stock">In Stock</div>
                        <div className="product-price">${product.price}</div>
                        <p>{product.description}</p>
                        <div className="product-options">
                            <div className="product-colours">
                                <span>Colours: </span>
                                <input type="radio" name="colour" value="red" /> <span>Red</span>
                                <input type="radio" name="colour" value="black" /> <span>Black</span>
                            </div>
                            <div className="product-sizes">
                                <span>Size: </span>
                                <button className="size-button">XS</button>
                                <button className="size-button">S</button>
                                <button className="size-button">M</button>
                                <button className="size-button">L</button>
                                <button className="size-button">XL</button>
                            </div>
                            <div className="product-quantity">
                                <button className="quantity-button">-</button>
                                <input type="number" value="1" className="quantity-input" />
                                <button className="quantity-button">+</button>
                            </div>
                            <button className="buy-button">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="related-products">
                    <h2>Related Products</h2>
                    <div className="related-products-container">
                        {relatedProducts.map(relatedProduct => (
                            <div key={relatedProduct.id} className="related-product-item">
                                <img src={relatedProduct.imgUrl} alt={relatedProduct.name} className="related-product-image" />
                                <h3>{relatedProduct.name}</h3>
                                <p>${relatedProduct.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OneProduct;
