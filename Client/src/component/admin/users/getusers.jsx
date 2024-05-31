import React from 'react'
import { useLocation ,useNavigate} from 'react-router-dom'
export const getusers = () => {
  const navigate = useNavigate()
  const location=useLocation()
  
  const {datauser,refresh,setrefresh}=location.state

  console.log(datauser,refresh,setrefresh);
  return (
   <>
   {datauser.map((el)=>{

   return <div>
      <h2 onClick={()=>{navigate("/oneuser",{state:{el:el},state:{refresh:refresh},state:{setrefresh:setrefresh}})}}>{el.username}</h2>
    </div>
   })}
   </>
  )
}
 export default getusers