import React from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Nav } from './Nav'

export const Home1=()=>{
   
       const ccc = useSelector((store) => store.cars);

       const navigate = useNavigate()
       
       const goToDelete=()=>{
              navigate('/Delete')
       }

       const goToUpdateprice=()=>{
              navigate('/Updateprice')
       }

       const goToUpdatecar=()=>{
              navigate('/Updatecar')
       }

       const goToUpdatecompony=()=>{
              navigate('/Updatecompany')
       }

       const goToViewOfLending=()=>{
              navigate('/viewOfLending')
       }
       console.log(ccc)
   
       // <NavLink to='/Delete' className='link'>להסרת רכב</NavLink>
       // <NavLink to='/Updateprice' className='link'>לעדכון מחירי הנעה </NavLink>
       // <NavLink to='/Updatecar' className='link'>להוספת רכב</NavLink>
       // <NavLink to='/Updatecompony' className='link'>להוספת מודל</NavLink>
       return<>
     <Nav></Nav>
 
       <div className='button-container'>
       <button className="nav-button" onClick={goToDelete}>להסרת רכב</button>
       <button className="nav-button" onClick={goToUpdateprice}>לעדכון מחירי הנעה</button>
       <button className="nav-button" onClick={goToUpdatecar}>להוספת רכב</button>
       <button className="nav-button" onClick={goToUpdatecompony}>להוספת מודל</button>
       <button className="nav-button" onClick={goToViewOfLending}> לצפיה בהשאלות</button>
       </div>
       </>
   
}