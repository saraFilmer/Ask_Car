import React from "react"
import { useSelector } from "react-redux";
import { useState } from "react"

export const Filter=({onFilterChaneg,ifChanged})=>{

const [city,setcity]=useState('');
const [price,setprice]=useState('');
const [anaa,setanaa]=useState('');
const [avail,setAvail]=useState('')

 //שליפת מערך הרכבים מהסטור
 const cars=useSelector(Store => Store.cars) 
     
 const Anaa=useSelector(Store => Store.propulsion) ;
 // שלב 1: שלוף את כל הערים
 const cities = cars.map(item => item.city); 
 // שלב 2: הסר כפילויות על ידי שימוש ב-Set
 const uniqueCities = Array.from(new Set(cities));

 // שלוף את כל סוגי ההנעה
 const a = Anaa.map(item => item.name); 

 //שומרת על השינויים
 const catchchenge =()=>{
  onFilterChaneg({city ,price ,anaa,avail});
  ifChanged(false)
 };


return<>

<div className='optionS'>


        {/* בחירת עיר */}
         <select className="filterItem" onChange= {(e) => {setcity( e.target.value); catchchenge();}}>
        <option disabled selected>בחר עיר</option> 
        {uniqueCities.map((city, index)=><option key={index}>{city}</option>)} </select>

        <br></br>

        {/*בחירת סוג הנעה  */}
         <select className="filterItem" onChange= {(e) => {setanaa(e.target.value ); catchchenge();}}>
         <option disabled selected>בחר סוג הנעה</option>     
        {a.map((city, index)=><option key={index}>{city}</option>)} </select>

        <br></br>

        {/* בחירת טווח מחיר */}
         <select className="filterItem"  onChange= {(e) => {setprice( e.target.value );catchchenge();}}>
        <option disabled selected>בחר טווח מחיר</option>     
        {uniqueCities.map((city, index)=><option key={index} >{city}</option>)} </select>

        <br></br>
        {/*בחירת פנוי תפוס */}
        <select className="filterItem"  onChange= {(e) => {setAvail( e.target.id);catchchenge();}}>
        <option disabled selected>בחר </option>     
        <option id={true} >פנוי</option>
       <option id={false}>תפוס</option>
       </select>

        <br></br>
        </div>
        </>
    }