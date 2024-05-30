import React from 'react'
import { useLocation } from 'react-router-dom'

const getprodact = () => {
  const location=useLocation()
  const {dataprodact}=location.state

  return (
    <>
    {dataprodact.map((el)=>{
  
 return  <div>
    <h2>{el.name}</h2>
   </div>

    })}
  

    </>
  )
}

export default getprodact