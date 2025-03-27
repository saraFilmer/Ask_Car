import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCar } from "../redux/Action"
import swal from "sweetalert"
import { Nav } from '../Nav';
export const UpdateCar=()=>{

    
     const degem = useSelector(Store => Store.CarModelsts)
     const ANAA = useSelector(Store => Store.propulsion)
     const cars = useSelector(Store => Store.cars)

     const [car,setCar]=useState({code:cars.lenght+1,
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
    const dispatch=useDispatch()

    console.log(car)
    const save=()=>{
        // setCar({...car, code:cars.lenght+1})
        // setCar({...car, available:true})
        swal(`שלום רכב מסוג !`, " התווסף לרשימת הרכבים", 'success')
            // navigate -> welcome
            // ניתוב לאח - עם סלש
            // ניתוב לבן - בלי סלש        
        dispatch(addCar(car))
    }

      return<>
      <Nav></Nav>
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
      <footer className="about-footer">
        <p>&copy; 2024 AskCar. כל הזכויות שמורות.</p>
      </footer>
         
      </> 
}