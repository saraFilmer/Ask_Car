import { useState } from "react";
import swal from "sweetalert"
import './style.css'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/Action";
import { addUser } from "./redux/Action";
import React from 'react';
// import { useForm } from 'react-hook-form';

export const SingIn = () => {

    const [user, setUser] = useState({username: '',date: '',creditCard: '',phone: '' ,tz: '',password: '',email: '',typeCode:'5'})
    const [errors, setErrors] = useState({})
    const users = useSelector(Store => Store.users)

    // useDispatch - משתנה שמשגר פעולות לחלל
    const dispatch = useDispatch()

    // יצירת משתנה שמנתב למקום אחר
    const navigate = useNavigate()
    
    const checkName = (value) => {
        const nameRegex = /^[א-ת\s'-]{2,50}$/
        // value.match(/regex/)
        if (!value.match(nameRegex)) {
            setErrors({ ...errors, username: 'invalid name!' })
        }
        else {
            setErrors({ ...errors, username: '' })
        }
    }
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
    const checkPhone = (value) => {      
        const nameRegex = /^0\d([\d]{0,1})([-]{0,1})\d{7}$/
        // value.match(/regex/)
        if (!value.match(nameRegex)) {
            setErrors({ ...errors, userphone: 'invalid phone!' })
        }
        else {
            setErrors({ ...errors, userphone: '' })
        }
    }
    const checkTz = (value) => {      
        const nameRegex = /^(?:[0-9]{8}[0-9]|[0-9]{9})$/
        // value.match(/regex/)
        if (!value.match(nameRegex)) {
            setErrors({ ...errors, tz: 'invalid tz!' })
        }
        else {
            setErrors({ ...errors, tz: '' })
        }
    }
    const checkCreditCard = (value) => {      
        const nameRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/
        // value.match(/regex/)
        if (!value.match(nameRegex)) {
            setErrors({ ...errors, creditCard: 'invalid credit card!' })
        }
        else {
            setErrors({ ...errors, creditCard: '' })
        }
    }
   
    const checkDate = (value) => {      
        const nameRegex = /^(0[1-9]|1[0-2])[-/](\d{2})$/
        // value.match(/regex/)
        if (!value.match(nameRegex)) {
            setErrors({ ...errors, date: 'invalid date!' })
        }
        else {
            setErrors({ ...errors, date: '' })
        }
    }
    const checkThree = (value) => {      
        const nameRegex = /^(?:[0-9]{3})$/
        // value.match(/regex/)
        if (!value.match(nameRegex)) {
            setErrors({ ...errors, CVV: 'invalid 3 digits!' })
        }
        else {
            setErrors({ ...errors, CVV: '' })
        }
    }
    const send = () => {
      
        console.log(user)
            if(user.username===''||user.email===''||user.password===''||user.tz===''||user.phone===''||user.creditCard===''||user.date==='')
                {
                    alert('הטופס אינו מלא במלואו')}   
            else{           
            // שמירת המשתמש במשתמש הנוכחי של הסטייט
            dispatch(setCurrentUser(user))
            //שמירה של המשתמש במערך יוזרס של הסטייט
            dispatch(addUser(user))
            swal(`Hello ${user.username}!`, "login successfuly!", 'success')
            navigate('/Login')}     
    }   
    return <><div className="Input">
        <h2>Signin</h2>
        <label className="input">שם</label>
        <br></br>
        <input placeholder="input name" className="input" required
            // פונקציה שמופעלת בעת כל שינוי בפקד - בודקת אם הערך המוזן תקין
            onChange={(e) => checkName(e.target.value)}
            // פונקציה שמופעלת בעת עזיבת הפקד ומציבה במשתמש את שם המשתמש שהוזן
            onBlur={(e) => setUser({ ...user, username: e.target.value })}
            // {...register('name', { required: 'שדה שם הוא חובה' })}
         />     
         <br></br>
        <p className="error">{errors.username}</p>
        <label className="input">מייל</label>
        <br></br>
        <input placeholder="input email" className="input" required
            onChange={(e) => checkEmail(e.target.value)}
            onBlur={(e) => setUser({ ...user, email: e.target.value })}/>
        <br></br>
        <p className="error">{errors.email}</p>
        <label className="input">סיסמא</label>
        <br></br>
        <input placeholder="input password" className="input" required
            onChange={(e) => checkPassword(e.target.value)}
            onBlur={(e) => setUser({ ...user, password: e.target.value })}/>
        <br></br>
        <p className="error">{errors.password}</p>
        <label className="input">נייד</label>
        <br></br>
        <input placeholder="input phone" 
            onChange={(e) => checkPhone(e.target.value)}
            onBlur={(e) => setUser({ ...user, phone: e.target.value })}/>
        <p className="error">{errors.userphone}</p>
        <label className="input">תעודת זהות</label>
        <br></br>
        <input placeholder="input tz" 
            onChange={(e) => checkTz(e.target.value)}
            onBlur={(e) => setUser({ ...user, tz: e.target.value })}/>
        <br></br>
        <p className="error">{errors.tz}</p>
        <label className="input">מספר כרטיס אשראי</label>
        <br></br>
        <input placeholder="****-****-****-****" 
            onChange={(e) => checkCreditCard(e.target.value)}
            onBlur={(e) => setUser({ ...user, creditCard: e.target.value })}/>
        <br></br>
        <p className="error">{errors.creditCard}</p>
        <label className="input">תוקף</label>
        <br></br>
        <input placeholder="00/00" 
            onChange={(e) => checkDate(e.target.value)}
            onBlur={(e) => setUser({ ...user, date: e.target.value })}/>
        <br></br>
        <p className="error">{errors.date}</p>
        <label className="input">3 ספרות</label>
        <br></br>
        <input placeholder="CVV" 
            onChange={(e) => checkThree(e.target.value)}
            onBlur={(e) => setUser({ ...user, CVV: e.target.value })}/>
        <br></br>
        <p className="error">{errors.CVV}</p>
        <button onClick={send}>send</button>
        </div>
    </>
}

