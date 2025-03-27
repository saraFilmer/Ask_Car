import { useEffect, useState } from "react"
import swal from 'sweetalert'

export const Num = () => {

    const [color, setColor] = useState()

    // Life cycle - מחזור החיים של הקומפוננטה
    // 1.
    // onInit - בעת טעינה
    // בעת טעינה של הקומפוננטה
    // 2.
    // בעת שינוי של משתנה מסוים
    // onChanges
    // 3. 
    // בעת מיתה - דריסה - הריסה
    // ברגע שהקומפוננטה מפסיקה להיות מוצגת
    // onDestroy

    // מגדירה את מחזור החיים של הקומפוננטה useEffect הפונקציה 
    useEffect(() => {
        // בעת טעינה
        document.title = 'Use Effect'
        // למעיישה
        // דוגמאות מעשיות
        // שליפה משרת
        // חישוב

        // בעת הריסה
        return () => {
            document.body.style.backgroundColor = 'white'
            document.title = 'React App'
            // דוגמאות מעשיות
            // שמירת טיוטה
            // שאלה האם לצאת או לא...
        }
    }, [])

    useEffect(() => {
        console.log(color);
        if (color)
            document.body.style.backgroundColor = color

        // בעת שינוי של כל אחד מהמשתנים שנמצאים במערך
    }, [color])

    return <>
        <h1>Hi!</h1>
        <input type="color" onChange={(e) => setColor(e.target.value)}></input>
    </>
}