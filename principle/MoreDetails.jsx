import { useState } from "react";


export const MoreDetails=(props)=>{
    
    const {time}=props

    const [showDetails, setShowDetails] = useState(false);
    let x=new Date(time)
   

    const toggleDetails=()=>{
    setShowDetails(!showDetails);
    }
   return<>
    <button onClick={toggleDetails}>
    {showDetails ? 'להסתיר' : 'שעת החזרה'}</button>
    {showDetails && 
    <p>        
     שעה {x.toLocaleTimeString()}
     תאריך {x.toLocaleDateString()}</p> }
      </> 
     }
