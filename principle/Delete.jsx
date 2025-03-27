import { DeleteCar } from "../DeleteCar";
import { useSelector } from "react-redux";
import React, { useState } from "react";

export const Delete=()=>{

    const ccc = useSelector((store) => store.cars);
    const [del, setDel]=useState(ccc)
   
    return<>
    <div className="images">
    {del.map((item, i) => <DeleteCar key={i} code={item.code} licenseNumber={item.licenseNumber} codeCarModelsts={item.codeCarModelsts} 
    numPlaces={item.numPlaces} yearbook={item.yearbook} gir={item.gir} driveType={item.driveType} priceHour={item.priceHour}
    consKm={item.consKm} balance={item.balance} street={item.street} city={item.city}
    available={item.available}></DeleteCar>)}</div></>
}





