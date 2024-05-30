import React from 'react'
import { useLocation } from 'react-router-dom'
export const getusers = () => {
  const location=useLocation()
  const {datauser}=location.state
  return (
   <>
   {datauser.map((el)=>{

   return <div>
      <h2>{el.username}</h2>
    </div>
   })}
   </>
  )
}
 export default getusers