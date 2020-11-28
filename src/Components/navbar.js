import {NavLink} from 'react-router-dom';
import './index.css';
const navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li>
                 <NavLink  to ="/"  activeStyle={{color: "rgb(11, 51, 18)" }}>Home</NavLink>
                </li>
                <li>
                <NavLink  to ="/history"  activeStyle={{color:"rgb(11, 51, 18)"}}>History</NavLink>
                </li>
                 <li>
                 <NavLink  to ="/address" activeStyle={{color:"rgb(11, 51, 18)"}}>Address</NavLink>
                </li>
            </ul>
        </div>
    );
}
export default navbar;