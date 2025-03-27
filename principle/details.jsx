import { useParams } from 'react-router'
import './style.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { updateAnaa } from '../redux/Action'
import swal from 'sweetalert'
import React from 'react'

export const Details = () => {
    
    const propulsion = useSelector((store) => store.propulsion);

    const params = useParams()

    const { name, price ,code } = params
    
    const [newValue,setnewValue]=useState({name,code,price})
    console.log(newValue)
    const dispatch=useDispatch()

    let x
    for(x=0;x<propulsion.length && propulsion[x].name!=name;x++);
    console.log(x)
    const dis=()=>{
         dispatch(updateAnaa(newValue,x))
         
         swal('העדכון בוצע בהצלחה','תוכל לבצע עדכונים נוספים','success')
         console.log(propulsion)
    }

    return <>
        <div className="product-card">
            עדכן את  {name} <br></br>  
            {price}
           <input placeholder='המחיר החדש' onChange={(e) => setnewValue({...newValue , price:e.target.value})}></input><br></br>
           <button onClick={dis}>לעדכון</button>
        </div>
    </>
}