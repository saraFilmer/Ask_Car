import React from "react"
import { useState } from "react"
import swal from "sweetalert"

export const NewCard=()=>{

    const [user, setUser] = useState({username: '',date: '',creditCard: '',phone: '' ,tz: '',password: '',email: ''})
    const [errors, setErrors] = useState({})

    const checkDate = (value) => { 
        const nameRegex = /^(0[1-9]|1[0-2])\/\d{4}$/
        // value.match(/regex/)
        if (!value.match(nameRegex)) {
            setErrors({ ...errors, date: 'invalid date!' })
        }
        else {
            setErrors({ ...errors, date: '' })
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

    const saveA=()=>{
        swal("פרטי האשראי נשמרו לרכישה הנוכחית","תתללללם!!!","success")
    }

    return<>
    <div className="Input">
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

        <button onClick={saveA}>לשמירת הפרטים</button></div>
    </>
}