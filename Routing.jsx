// התקנה של ספריות הניתובים
// npm i react-router
// npm i react-router-dom
import { Route, Routes } from "react-router"
import { Home } from "./home"
import { Login } from "./Login"
import { CbMain } from "./products"
import { SingIn } from "./singIn"
import { Home1 } from "./home copy"
import { Return } from "./return"
import { NewCard } from "./newCard"
import { UpdateCar } from "./principle/Updatecar"
import { Updatecompany } from "./principle/Updatecompany"
import { Delete } from "./principle/Delete"
import { Updateprice } from "./principle/UpdatePrice"
import { Nav1 } from "./principle/Nav1"
import { Nav } from "./Nav"
import { Details } from "./principle/details"

import {ViewOfLending} from "./viewOfLending"
import { Odot } from "./odot"

// יצירת קומפוננטה שמכילה הגדרות של הניתובים
// טען קומפוננטה מסוימת url הצהרה עבור ניתוב מסוים 
export const Routing = () => {
    return <>
        {/* Routes - תגית שמכילה את כל ההגדרות של ניתובים */}
        <Routes>
            {/* Route - הגדרה של ניתוב בודד */}
            {/* path = url ניתוב שנכתוב ב */}
            {/* element = קומפוננטה שנטען */}
                      
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="home copy" element={<Home1></Home1>}></Route> 
            <Route path="CbMain" element={<CbMain></CbMain>}></Route>
            <Route path="return" element={<Return></Return>}>
             <Route path="newCard" element={<NewCard></NewCard>}></Route></Route>
            <Route path="singIn" element={<SingIn className="input"></SingIn>}></Route>  
            
            <Route path="Updatecar" element={<UpdateCar></UpdateCar>}></Route>
            <Route path="Delete" element={<Delete></Delete>}></Route>
            <Route path="UpdatePrice" element={<Updateprice></Updateprice>}>
            <Route path="details/:name/:amount/:code" element={<Details></Details>}></Route></Route>
            <Route path="Updatecompany" element={<Updatecompany></Updatecompany>}></Route> 
            <Route path="viewOfLending" element={<ViewOfLending></ViewOfLending>}></Route>      
          
            <Route path="odot" element={<Odot></Odot>}></Route>
            <Route path="" element={<Login></Login>}></Route>

        </Routes>
    </>
}
