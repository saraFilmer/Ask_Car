import { BrowserRouter } from "react-router-dom"
import { Routing } from "./Routing"
import { Provider } from "react-redux"
import myStore from "./redux/Store"
import { Login } from "./Login"
import { Nav1 } from "./principle/Nav1"
import { Nav } from "./Nav"

export const Main=()=>{
   return<>
    <Provider store={myStore}>
            <BrowserRouter>
                <Routing></Routing>
            </BrowserRouter>
    </Provider>
   </>
}