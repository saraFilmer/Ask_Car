import { useState,useEffect } from "react";
import swal from "sweetalert"
// npm i sweetalert
import './style.css'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/Action";
import { Circle } from "./circle";

export const Login = () => {

    const [user, setUser] = useState({email:'',password:''})
    const [errors, setErrors] = useState({})
    const [x, setX]=useState(false)



    // selector - שליפת משתנים גלובליים מתוך הסטייט
    const users = useSelector(Store => Store.users)
    // useDispatch - משתנה שמשגר פעולות לחלל
    const dispatch = useDispatch()
    // יצירת משתנה שמנתב למקום אחר
    const navigate = useNavigate()
    
    const checkEmail = (value) => {
        // /regex/i.test(value)
        if (!/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/i.test(value)) {
            setErrors({ ...errors, email: 'invalid email!' })
        }
        else {
            setErrors({ ...errors, email: '' })
        }
    }
    const checkPassword = (value) => {
        if (value.length < 4 || value.length > 16) {
            setErrors({ ...errors, password: 'password length must be between 4 and 16' })
        }
        else {
            setErrors({ ...errors, password: '' })
        }
    }
    

    console.log(users)
    
    const send = () => {
        

        if(user.email===''||user.password===''){alert('הטופס אינו מלא במלואו')}
        let arr = users.filter(x => x.email == user.email && x.password == user.password)
       console.log(arr[0])  

        if (arr.length > 0) {
        if(arr[0].typeCode==4){
            dispatch(setCurrentUser(arr[0]))
            swal(`Hello ${arr[0].username}!`, "login successfuly!", 'success')

            navigate('/home copy')
        }
        if(arr[0].typeCode==5){
            dispatch(setCurrentUser(arr[0]))
            setX(true)
            swal(`Hello ${arr[0].username}!`, "login successfuly!", 'success')
            setX(false)
            navigate('/home')
        }
            
        }
    }



    const newC=()=>{
      //singInקומפוננתה שמנתבת שם חדש ל  
        navigate('/singIn')
    }


    return <>

        <div className="Input">
        <h2>Login:</h2>
        {x &&  <Circle></Circle>}
        <label >email:</label>
        <br></br>
        <input  placeholder="input email" 
            onChange={(e) => checkEmail(e.target.value)}
            onBlur={(e) => setUser({ ...user, email: e.target.value })}></input>
        <br></br>
        <p className="error">{errors.email}</p>
        <label >password:</label>
        <br></br>
        <input  placeholder="input password" 
            onChange={(e) => checkPassword(e.target.value)}
            onBlur={(e) => setUser({ ...user, password: e.target.value })}></input>
        <br></br>
        <p className="error">{errors.password}</p>       
        <button onClick={send}>send</button><br></br>
        
        <button className="newCust" onClick={newC}>לקוח חדש?</button>
        </div>
    </>
}
