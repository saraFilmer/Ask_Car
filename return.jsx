import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Nav } from './Nav'
import { addCarReturn, updateCarP } from "./redux/Action";
import { Outlet, useNavigate } from "react-router";


export const Return = () => {


    //משתנה CODEA שיבדוק האם הלקוח אכן הכניס את הקוד
    const [codeA, setCodeA] = useState('')
    const [cityA, setCityA] = useState('')
    const [street, setStreet] = useState('')
    //קוד, קוד החזרה, שעה,יתרה,סך לתשלום ,שולם:בוליאני
    const [codeAuto, setCodeAuto] = useState([])
    const [codeReturn, setCodeReturn] = useState('')
    ///משתנה שמכיל את הזמן הנוכחי 
    const [Time] = useState(new Date());
    const [balance, setBalance] = useState('')
    const [Sum, setsum] = useState('')
    const [payB, setpayB] = useState(false)
    // const [ret, setRet]=useState({time:dateTime})
    // const [numOrder,setNumOrder]=useState('')
    //const [currentLend,setCurrentLend]=useState({})
    //מקבל מהסטיייט את מערך ההשאלות
    let lend = useSelector(Store => Store.lending)
    let cars = useSelector(Store => Store.cars)
    let prop = useSelector(Store => Store.propulsion)
    let ret = useSelector(Store => Store.return)

    const navigate = useNavigate()
    const dis = useDispatch()

    console.log(lend)


    

    //מופעלת כאשר המשתמש לוחץ את הכפתור
    const returnA = () => {
        //בודקת האם המשתמש הכניס את קוד ההשאלה
        if (codeA == '' || balance == '' || cityA == '' || street == '') {
            alert('נא וודאו שהכנסתם את כל הפרטים')
            return;
        }
        //בודק האם קיים האשלה תואמת לקוד שהמשתמש הכניס
        let x = lend.filter(x => x.numOrder == codeA)
        if (x.length == 0) {
            alert('קוד הזמנה שגוי הכנס שוב')
            return;
        }

        else {

            //קוד ההשאלה הנוכחית
            let thisL = lend.filter(x => x.numOrder == codeA)
            setCodeAuto([...codeAuto,ret.length+1])
            setCodeReturn(thisL[0].code)
            let c = cars.filter(x => x.code == thisL[0].code)
            console.log(c[0].priceHour)
            let numOrder = thisL[0].numOrder
            // setNumOrder({...numOrder,x})
            console.log(numOrder)
            //מקבל לתוך משתנה את הזמן של ההשאלה
            let takenTime = new Date(thisL[0].time)
            //חישוב הפער בשניות 0
            let dd = Time - takenTime
            //חישוב משתנה להמרה משניות לשעות
            const millisecondsInDay = 24 * 3600 * 1000;
            //מחזיר כמה שעות עברו מההשאלה
            const daysDifference = dd / millisecondsInDay;
            //משתנה שמכיל את הרכב התואם להשאלה

            // //משתנה USESTATE שמכיל את כל פרטי הרכב
            // console.log(c[0].priceHour)
            // setdriveType(c[0].driveType)
            // setcodeCM(c[0].codeCarModelsts)
            //חישוב סכום לפי שעות
            let sum = c[0].priceHour * daysDifference
            //אובייקט שיכיל את סוג ההנעה של הרכב הנוכחי
            let suganaa = prop.filter(x => x.code == c[0].driveType)
            //מחיר לליטר דלק
            let taarif = suganaa[0].price
            //יתרה בעבר
            let preventBalance = c[0].balance
            //משתנה שמכיל את הID של הרכב
            let id = c[0].code - 1
            let primi=thisL[0].numOrder
            console.log(id)
            ///אם הלקוח בזבז לי דלק אחייב אותו על הפער
            if (preventBalance > balance) {
                sum += (preventBalance - balance) * taarif
            }
            // אם הלקוח הוסיף לי דלק אזכה אותו על הפער
            else {
                sum -= (balance - preventBalance) * taarif
                if (sum <= 0)
                    sum = 5;
            }

            sum = Math.floor(sum)

            setsum(sum)
            setpayB(true)

            Swal.fire({
                title: `הסכום לתשלום הוא ${sum} ש"ח`,
                text: "האם תרצה ללשלם באמצעות כרטיס האשראי השמור במערכת",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'כן, אני רוצה',
                cancelButtonText: 'לא, אני מעוניין לשלם במספר חדש'
            }).then((result) => {
                if (result.isConfirmed) {
                    //התשלום בוצע- משתנה בסטייט מתפוס לפנוי
                    dis(updateCarP(true, id))
                    //להוסיף את הרכב הנוכחי למערך ההחזרות
                    //קוד, קוד החזרה, שעה,יתרה,סך לתשלום ,שולם:בוליאני
                    dis(addCarReturn({ codeAuto, primi, Time, balance, Sum, payB }))
                    //לעדכן את הפרטים של הרכב-יתרה נוכחית, רחוב נוכחי, ועיר
                    Swal.fire('התשלום בוצע בהצלחה', `TAKEandGO גאה בך על הבחירה המוצלחת מחכים לך שוב`, 'success');
                }
                else if (result.isDismissed) {
                    navigate('newCard')

                }
            })
        }
    }



    return <>
        <Nav></Nav>
        <div className="Input">
            <h1>להחזרה ותשלום</h1>
            <br></br>
            <input id="vvv" itemID="vvv" type="text" placeholder="הכנס קוד השאלה"
                onChange={(e) => setCodeA(e.target.value)} />
            <br></br>
            <input type="text" placeholder="הכנס עיר נוכחית"
                onChange={(e) => setCityA(e.target.value)} />
            <br></br>
            <input type="text" placeholder="הכנס רחוב נוכחי"
                onChange={(e) => setStreet(e.target.value)} />
            <br></br>
            <input type="text" placeholder="הכנס יתרה נוכחית"
                onChange={(e) => setBalance(e.target.value)} />
            <br></br>
            <Outlet></Outlet><br></br>
            <button onClick={returnA}>לתשלום</button>
        </div>

    </>
}