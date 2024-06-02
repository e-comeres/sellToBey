import React from 'react'
import { useLocation } from 'react-router-dom'
export const getseller = () => {
  const location=useLocation()
  const {dataseller}=location.state
  return (
<>
{dataseller.map((el)=>{

 return <div>
    <h2 >{el.username}</h2>
  </div>
})}
</>
   
  )
}

export default getseller