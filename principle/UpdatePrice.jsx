import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom"

export const Updateprice=()=>{

    const propulsion = useSelector((store) => store.propulsion);

    const nav = useNavigate()

    const show = (index) => {
        // ניתוב לילד - בלי סלש
        nav(`details/${propulsion[index].name}/${propulsion[index].price}/${propulsion[index].code}`)
       
    }


    return <>
        {/* Outlet - מגדיר היכן תטען קומפוננטת הילד */}
        <Outlet></Outlet>
      
        <div className="Input">
        {propulsion.map((item, index) =>
            <div className="price-item" key={index}>
                <p className="price-item-name">{item.name}</p>
                <button className="price=item-button" onClick={() => show(index)}>לעדכון מחיר</button>
            </div>
        )}
        </div>
        </>
        }


export const showItem=(props)=>{
   const {name , price} =props
   return<>
   <div className="show-item">
    
   <p className="show-item-name"> {name}</p>
    <p className="show-item-price">{price}</p>
   </div>
   </>
}
