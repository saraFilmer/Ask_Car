// import { useState } from "react"
// import { useSelector } from "react-redux"
// import { MoreDetails } from "./MoreDetails"


// export const View=(props)=>{

//         //לקבל את הפרופס
//    const {code,time,num}=props
//    //מקבל את מערך ההחזרות מהסטייט
//    let ret=useSelector(x=>x.return)
//    const [x, setX]=useState('')

//    console.log(ret)

//    //מקבל את צאריך ההשאלה
//    const dateTime = new Date(time)
//    //אמור לקבל לתוכו את תאריך ההחזרה
//    const [retTime,setRetTime]=useState(new Date())

//    //מקבל את ההחזרה התואמת להשאלה הנוכחית
//    let thisRet=ret.filter((item)=>item.primi===num)
//    console.log(thisRet)
//    //אם ההשאלה אכן הוחזרה כלומר מצאתי קוד השאלה תואם במערך ההחזרות
//    //נציב בתוך המשתנה x הוחזרה או לא
//    //וכן בצוך המשתנה של התאריך את זמן ההחזרה
// //    if(thisRet.length!==0){
// //         let x=new Date(thisRet[0].time)
// //         setRetTime(x)
// //         setX('הוחזרה')
// //    } 
// //    else{
// //         setX('לא הוחזרה')
// //    }
// {debugger}
//    return<>
//         <div className="product-card">
//             <p className="price-item-name">מספר הזמנה {num} </p>         
//             שעה {dateTime.toLocaleTimeString()}
//             תאריך {dateTime.toLocaleDateString()} <br/>
            
//             { thisRet.lenght!==0 &&
//             <MoreDetails time={thisRet[0].Time}></MoreDetails>}
//         </div>
//         </>
// }

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { MoreDetails } from "./MoreDetails";

export const View = (props) => {
  // לקבלת הפרופס
  const { code, time, num } = props;

  // מקבל את מערך ההחזרות מהסטייט
  let ret = useSelector((x) => x.return);
 
  // הגדרת state עבור מצב ההחזרה ותאריך ההחזרה
  const [status, setStatus] = useState('');
  const [retTime, setRetTime] = useState(new Date());

  // קבלת תאריך ההשאלה
  const dateTime = new Date(time);

  // מציאת ההחזרה התואמת להשאלה הנוכחית
  let thisRet = ret.filter((item) => item.primi === num);

  useEffect(() => {
    if (thisRet.length !== 0) {
      // הגדרת התאריך והסטטוס של ההחזרה
      let x = new Date(thisRet[0].time);
      setRetTime(x);
      setStatus('הוחזרה');
    } else {
      setStatus('לא הוחזרה');
    }
  }, [thisRet]); // עדכון מחדש כאשר thisRet משתנה

  return (
    <>
      <div className="product-card">
        <p className="price-item-name">מספר הזמנה {num} </p>
        שעה {dateTime.toLocaleTimeString()}<br />
        תאריך {dateTime.toLocaleDateString()}<br />
        {/* מצב ההחזרה */}
        <p>Status: {status}</p>

        {/* הצגת פרטי ההחזרה */}
        {thisRet.length !== 0 && (
          <MoreDetails time={thisRet[0].Time} /> // שינוי ל-`time`
        )}
      </div>
    </>
  );
};