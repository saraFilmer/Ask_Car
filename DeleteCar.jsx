
import './style.css';
import React from "react";
import Swal from "sweetalert2";
import { deleteCar, updateCar } from './redux/Action';
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCar } from "./redux/Action"
import swal from "sweetalert"

export const DeleteCar = (props) => {
    
  const {
    code,licenseNumber,codeCarModelsts,numPlaces,
    yearbook,gir,driveType,priceHour,consKm,balance,street,city,available
  } = props;

  //להראות פרטים נוספים
  const [showDetails, setShowDetails] = useState(false);
 // const [car, setCar] = useState({});
 const degem = useSelector(Store => Store.CarModelsts)
 const ANAA = useSelector(Store => Store.propulsion)
 const cars = useSelector(Store => Store.cars)

 const [car,setCar]=useState({code:code,
    licenseNumber:'',
    codeCarModelsts:'',
    numPlaces:'',
    yearbook:'',
    gir:'',
    driveType:'',
    priceHour:'',
    consKm:'',
    balance:'',
    street:'',
    city:'',
    available: true})

//  שמירת הנתונים שהוכנס

let id=code-1
console.log(car)
const save=()=>{

    swal(`שלום רכב מסוג !`, " התווסף לרשימת הרכבים", 'success')
        // navigate -> welcome
        // ניתוב לאח - עם סלש
        // ניתוב לבן - בלי סלש        
    dispatch(updateCar(car,id))
}


//להראות פרטים נוספים
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const dispatch = useDispatch();

  const CarModelsts = useSelector((store) => store.CarModelsts);
  const propulsion = useSelector((store) => store.propulsion);
  const products = useSelector((store) => store.products);
  const ccc = useSelector((store) => store.cars);
  const bbb = useSelector((store) => store.lending);

  let CarModelst = CarModelsts.filter((x) => x.Code === codeCarModelsts);
  let propu = propulsion.filter((x) => x.code === driveType);
  let prod = products.filter((x) => x.code === CarModelst[0].typeCode);
  //הרכב הנוכחי
  // let c=ccc.filter(x=>x.code===code)
  // let iiiddd=c[0].id


  const showAlert = () => {
    let id=0;
    id=code-1
    console.log(id)
    Swal.fire({
      title: `לחצת על ${CarModelst[0].Company}!`,
      text: "האם אתה מעוניין למחוק אותי?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'כן,החלטתי סופית',
      cancelButtonText: 'לא, ביטול המחיקה'
    }).then((result) => {
      if (result.isConfirmed) {
          dispatch(deleteCar(id));        
          Swal.fire('הפריט נמחק בהצלחה', "חבל על דאבדין", 'info');
        //  console.log(ccc)
        }
      if (result.isDismissed) {
        Swal.fire('ביטול', "המחיקה בוטלה", 'info');
      }
    });
  };



  

  return (
    <div className="car">
      <div className="product-card">
        <img className="img" src={`${process.env.PUBLIC_URL}/images/${prod[0].pic}.JPG`} alt="Car" />
        <p>
          {prod[0].num}
          <br />{propu[0].name}
          <br />{prod[0].name}
          <br />{CarModelst[0].Company}
          <br />{city}
          <br />{street}
          <button onClick={showAlert}>כדי למחוק אותי😓</button>
        </p>
        <br />
        <button onClick={toggleDetails}>
          {showDetails ? 'לעדכון פרטי הרכב' : '»'}
        </button>
        {showDetails && (
          <div className="product-details">
            <div className="Input">
      <input placeholder="הכנס מספר רשוי" onChange={(e) => setCar({ ...car, licenseNumber: e.target.value })}></input><br></br>
      <input placeholder="הכנס שנת יצור" onChange={(e) => setCar({ ...car, yearbook: e.target.value })}></input><br></br>
      <input placeholder="הכנס גיר אוטומטי בוליני " onChange={(e) => setCar({ ...car, gir: e.target.value })}></input><br></br>
      <input placeholder="הכנס מחיר לשעה " onChange={(e) => setCar({ ...car, priceHour: e.target.value })}></input><br></br>
      <input placeholder="הכנס צריכה לקמש  " onChange={(e) => setCar({ ...car, consKm: e.target.value })}></input><br></br>
      <input placeholder="הכנס מספר יתרה" onChange={(e) => setCar({ ...car,balance : e.target.value })}></input><br></br>
      <input placeholder="הכנס עיר" onChange={(e) => setCar({ ...car, street: e.target.value })}></input><br></br>
      <input placeholder="הכנס רחוב" onChange={(e) => setCar({ ...car, city: e.target.value })}></input><br></br>
      <select placeholder=" הכנס " onChange={(e) => setCar({ ...car, codeCarModelsts: e.target.value })}>
      <option disabled selected>בחר סוג מודל</option>     
      {degem.map((value, index)=><option value={value.Code} key={index}> {value.Model} {value.Company}</option>)}</select><br></br>
      <select placeholder="הכנס סוג הנעה" onChange={(e) => setCar({ ...car, driveType: e.target.value })}>
      <option disabled selected>בחר סוג הנעה</option>     
      {ANAA.map((value, index)=><option key={index} value={value.code}> {value.name}</option>)}</select><br></br>
      <button onClick={save}>לאשר</button></div>
           <br />
          </div>
        )}
      </div>
    </div>
  );
};

