import { useState,useEffect } from "react";
import { Degem } from "./degem";

import { useDispatch, useSelector } from "react-redux";
import { addCarModel } from "../redux/Action";

export const Updatecompany=()=>{



    const carModels = useSelector((store) => store.CarModelsts);
    const products = useSelector((store) => store.products);
    const [newV,setNewV]= useState({})

    const [company,setCompany]=useState('')
    const [degem,setDegem]=useState('')
    const [filtered,setfiltered]=useState(carModels)

    let companies=carModels.map(x=>x.Company)
    const uniqueCompanies = Array.from(new Set(companies));

    const dis=useDispatch()
    

    const handleFilterChange = () => {
      
      const filtcarModels = carModels.filter(car => {         
          return (          
              (company ==''|| car.Company == company)
              // (degem==''||car.typeCode==degem)
          );
      })

      setfiltered(filtcarModels);
  };

  useEffect(() => {
      handleFilterChange();
  }, [company]);
   
  console.log(degem)

    const add=()=>{
        
         dis(addCarModel(newV))
    }

    //const {Code,Company,Model,typeCode}
    return<>
    <div className="Input">
     <h5>כדי להוסיף דגם חדש לחברה שלנו</h5>
     <input placeholder="הכנס שם חברה" onChange={(e) => setNewV({ ...newV, Company: e.target.value })}></input><br></br>
     <input placeholder="הכנס שם מודל" onChange={(e) => setNewV({ ...newV, Model: e.target.value })}></input><br></br>
     <select  onChange={(e) => setNewV({ ...newV, codeCarModelsts: e.target.value })}>
      <option disabled selected>בחר סוג רכב</option> 
        {products.map((value, index)=><option value={value.Code} key={index}> {value.name}</option>)}</select><br></br>
         <button onClick={add}>להוספה</button><br/></div>
         <h5>למיון</h5>
        <select  onChange={(e) => setCompany( e.target.value )}>
      <option disabled selected>בחר חברה</option> 
        {uniqueCompanies.map((value, index)=><option key={index}> {value}</option>)}</select><br></br>
        {/* <select  onChange={(e) => setDegem( e.target.value)}>
      <option disabled selected>בחר סוג רכב</option> 
        {products.map((value, index)=><option value={value.Code} key={index}> {value.name}</option>)}</select><br></br> */}

      <h5>המודלים שכבר קיימים בחברה המוצלחת שלך</h5>     
    
    <div className='images'>
    {filtered.map((item,index)=><Degem key={index}
     Company={item.Company} Model={item.Model} 
     ></Degem>)}</div>
    
    </>

}