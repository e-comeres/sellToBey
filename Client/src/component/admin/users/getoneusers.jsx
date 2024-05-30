import React from 'react'
import { useLocation } from 'react-router-dom'

export const getoneusers = () => {
  const location=useLocation()
  const {el}=location.state
  return (
   <>
   <h2>{el.username}</h2>
   <h2>{el.role}</h2>
   </>
  )
}
 export default getoneusers