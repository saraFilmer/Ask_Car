import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './style.css'


export const Nav = () => { 
    let user = useSelector(x => x.currentUser)
console.log(user)
    return <>     
   
        <div className="nav">
            {user.length>0&&user[0].username && <p className='userName'>👤 {user[0].username} שלום</p>}
            <NavLink to='/home' className='link'>בית</NavLink>
            <NavLink to='/login' className='link'>לכניסה</NavLink>
            <NavLink to='/CbMain' className='link'>הרכבים שלנו</NavLink>
            <NavLink to='/singIn' className='link'>להרשמה</NavLink>
            <NavLink to='/return' className='link'>להחזרה</NavLink>
            <NavLink to='/odot' className='link'>אודות</NavLink>
            {user.length>0&&user[0].typeCode==="4" && <NavLink to='/home copy' className='link'>לניהול</NavLink>}
        </div>

    </>
}

