import axios from 'axios'
import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'

export const getoneusers = () => {
  const navigate = useNavigate()
  const location=useLocation()
  const {el,refresh,setrefresh}=location.state
const delet=()=>{
  axios.delete(`http://localhost:4000/api/users/users/${el.id}`)
  .then(()=>{
    console.log("deleted");
    setrefresh(!refresh)
  })
  .catch((err)=>{
    console.log(err);
  })
}

  return (
   <>
   <h2>{el.username}</h2>
   <h2>{el.email}</h2>
   <button onClick={()=>{delet(),navigate("/alluseres")}}>delet</button>
   </>
  )
}
 export default getoneusers