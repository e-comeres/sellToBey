import React, { useState } from 'react'
import axios from 'axios'
import Navbar from '../navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import './newProduct.css'


function NewProduct() {

    const [newProduct, setNewProduct] = useState({
        "productname": "",
        "imgUrl": "",
        "category": "",
        "price": 0,
        "description": "",
    })
    const navigate=useNavigate()

    const fillInputs = (event) => {
        event.preventDefault()
        const { name, value } = event.target;
        setNewProduct({
            ...newProduct,
            [name]: value,
        });
    };
    const create = (event)=>{
        event.preventDefault()
    axios.post(`http://localhost:4000/api/seller`, newProduct)
        .then(res => {
            alert("product posted successfully")
            setNewProduct(
                {
                    "productname": "",
                    "imgUrl": "",
                    "category": "",
                    "price": 0,
                    "description": "",
                }
            )
        })
        .catch(error=>{
            alert("oops something went wrong")
            console.error(error)
        }
        )
        navigate('/seller')
    }

    return (
        <div>
            <div>
                <Navbar/>
            </div>
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
                            type="text"
                            name="imgUrl"
                            value={newProduct.imgUrl}
                            onChange={fillInputs}
                        />
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
    )
}




export default NewProduct