
import React, { useState, useEffect } from 'react';

export const CurrentDateTime =()=> {

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // עדכון כל שניה

    return () => clearInterval(timer); // ניקוי של ה-timer כשהקומפוננטה לא מוצגת
  }, []);


return <>
    <div>
      <p>תאריך: {dateTime}</p>
      <p>שעה: {dateTime}</p>
    </div>
</>
 
}

export default CurrentDateTime;
