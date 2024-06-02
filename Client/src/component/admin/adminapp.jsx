import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, } from "react-router-dom"
const admin = () => {
    const [dataprodact,setdataprodact]=useState([])
    const [datauser,setdatauser]=useState([])
    const [dataseller,setdataseller]=useState([])
   
    const navigate = useNavigate()
    
    useEffect(()=>{
  axios.get(`http://localhost:4000/api/products`).then((response)=>{
    setdataprodact(response.data)
  }).catch((err)=>{8
    console.log(err);
  })
  axios.get(`http://localhost:4000/api/users/users`).then((response)=>{
    setdatauser(response.data)
  }).catch((err)=>{
    console.log(err);
  })
  axios.get(`http://localhost:4000/api/seller/seller`).then((response)=>{
    setdataseller(response.data)
  }).catch((err)=>{
    console.log(err);
  })
    },[])
  return (
    
    <div>
      <button onClick={()=>{navigate("/allprodact",{state:{dataprodact:dataprodact}})}}>products</button>
      <button onClick={()=>{navigate("/alluseres",{state:{datauser:datauser}})}}>users</button>
      <button onClick={()=>{navigate("/allseller",{state:{dataseller:dataseller}})}}>seller</button>
    </div>
    
  )
}

export default admin