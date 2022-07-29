import './App.css';
import {NavLink} from 'react-router-dom'

function NavBar(){
    return(
        <div>
            <ul className='navbar'>
            <li><NavLink className="nav-bar-link" to='/'>Home</NavLink></li>
            <li><NavLink className="nav-bar-link" to='/user/paban'>Paban Page</NavLink></li>
            <li><NavLink className="nav-bar-link" to='/user/ayan'>Ayan Page</NavLink></li>
            <li><NavLink className="nav-bar-link" to='/filter'>Filter</NavLink></li>
            <li><NavLink className="nav-bar-link" to='/contact'>Contact</NavLink></li>

          </ul>
        </div>
    );
};

export default NavBar;