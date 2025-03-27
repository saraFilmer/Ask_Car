
import { useState } from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { addLendingCar, updateCar } from './redux/Action';
import React from "react";
import Swal from "sweetalert2";
import swal from "sweetalert"

export const Car = (props) => {

  const {
    code,
    licenseNumber,
    codeCarModelsts,//קוד מודל רכב-נצטרך לשלוף
    numPlaces,
    yearbook,
    gir,
    driveType,//קוד סוג הנעה-נצטרך לשלוף
    priceHour,
    consKm,
    balance,
    street,
    city,
    available
  } = props;

  const dispatch = useDispatch();

  const [showDetails, setShowDetails] = useState(false);
  const [newValue,setNewValue] = useState({
    code,
    licenseNumber,
    codeCarModelsts,
    numPlaces,
    yearbook,
    gir,
    driveType,
    priceHour,
    consKm,
    balance,
    street,
    city,
    available: false
  });
  let f=available===true
  const [dateTime] = useState(new Date());
  const [avail, setAvail] = useState(available);

  //שליפת המערכים מהסטור
  const CarModelsts = useSelector((store) => store.CarModelsts);
  const propulsion = useSelector((store) => store.propulsion);
  const products = useSelector((store) => store.products);
  const ccc = useSelector((store) => store.cars);
  const bbb = useSelector((store) => store.lending);
  const currentUser = useSelector((store) => store.currentUser);

  //שליפת מודל הרכב המתאים
  let CarModelst = CarModelsts.filter((x) => x.Code === codeCarModelsts);
  //שליפת סוג ההנעה המתאים
  let propu = propulsion.filter((x) => x.code === driveType);
  //שליפת סוג הרכב המתאים ממערך סוגי הרכבים עפי קוד המודל
  let prod = products.filter((x) => x.code === CarModelst[0].typeCode);
  
  //הרכב הנוכחי
  // let c=ccc.filter(x=>x.code===code)
  // let iiiddd=c[0].id


  const toggleDetails = () => {
    if(currentUser.length===0){
      swal("אינך מוכר בתור לקוח שלנו🤐🤑","גזל גמור!!! חדררגגגגג!!!!!! חצוף🤬🤧","error")
      return;
    }
    else{
    setShowDetails(!showDetails);
    }
  };

  let y = Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 100);


  const showAlert = () => {
    let id=code-1;
  //////////////////////////////////////מלכה
  console.log(id);
     ////////////////////////////////////////////////מלכה
     if (!code) {
      alert("קוד הרכב אינו תקין.");
      return;
      
  }
  
  ///////////////////////////////מלכה
///////////////////////////////////////

    Swal.fire({
      title: `לחצת על ${CarModelst[0].Company}!`,
      text: "אתה בטוח בהזמנתך",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'כן, אני רוצה',
      cancelButtonText: 'לא, ביטול ההזמנה'
    }).then((result) => {
      if (result.isConfirmed) {
        if (avail === false) {
          Swal.fire('הרכב תפוס', "הזמנתך בוטלה", 'error');
        } else {
          dispatch(addLendingCar({ code, time: dateTime, numOrder: y }));
          console.log(bbb)
          setAvail(false);
          console.log(avail)
          let s=avail===false
          console.log(s)
          setNewValue({...newValue,available:s})
          dispatch(updateCar(newValue , id));        
          Swal.fire('הפריט הושכר בהצלחה', `קוד ההזמנה הוא: ${y}`, 'success');
          console.log(ccc)
        }
      } else if (result.isDismissed) {
        Swal.fire('ביטול', "הזמנתך בוטלה", 'info');
      }
    });
    
  };
  

  //להציג סימון לסוג הנעהה
  let x=''
        if(propu[0].name=='דלק')
         x="⛽"
         else if(propu[0].name=='גז')
          x="🧨"
        else if(propu[0].name=='חשמל')
          x="🔌"
        else if(propu[0].name=='היברידי')
          x="🤖"
        else if(propu[0].name=="סולר")
          x="🛢️"

  const statusClass = avail ? 'p' : 't';
  const statusText = avail ? 'פנוי' : 'תפוס';

  return (
    
      <div className="product-card">
        <img className="img" src={`${process.env.PUBLIC_URL}/images/${prod[0].pic}.JPG`} alt="Car" />
        <p>       
          {prod[0].name}<br />
          {CarModelst[0].Company}<br/>
         
          <p className={statusClass}>{statusText}</p>
        </p>
        
        <button onClick={toggleDetails}>
          {showDetails ? '«' : '»'}
        </button>
        {showDetails && (
          <div className="product-info"> 
          <button className="rent-button" onClick={showAlert}>כדי לבחור לשכור אותי</button><br/>
            <p>
              {x}
             <br/>מחיר לשעה {propu[0].price}
          <br />{city}
          <br />{street}
           <br />מספר מקומות ברכב {prod[0].num}</p>
          </div>
        )}
      </div>
 
  );
};

