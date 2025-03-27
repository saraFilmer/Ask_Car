import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './style.css'
import { useNavigate } from 'react-router-dom'


export const Nav1 = () => { 

    const user = useSelector(x => x.currentUser)

    const navigate = useNavigate()
    
    navigate('./Delete')

    return <>    

        <div className="nav">
            {user.username && <p className='userName'>{user.username}שלום  </p>}



        </div>
    </>
}
