import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import axios from 'axios'
   
function SellerInterface() {
  const [sellerProducts,setSellerProducts] = useState([])

   useEffect(()=>{
    axios.get(`http://localhost:4000/api/seller`)
    .then(res=>{
        console.log(res.data)
        const sortedProducts=res.data.sort((a,b)=>b.id-a.id)
        setSellerProducts(sortedProducts)
    })
    .catch(error=>console.error(error))
   },[])

   const SellerId = null

   
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <Link to ='/sellerNewProduct'>Post New Product</Link>
            <h2>Your Products List</h2>
            <div>
                <ul>
                    {sellerProducts.filter(product=>product.SellerId===SellerId).map(product=>(
                        <li key={product.id}>
                            <h2>{product.name}</h2>
                            <img src={product.imgUrl} alt="product" />
                            <h4>{product.category}</h4>
                        </li>
                    )
                    )}
                </ul>
            </div>
        </div>
    )
}
export default SellerInterface


