import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom'
class Header extends React.Component{
    render(){
        return (
            <div className="nav-bar">
                <ul id='myNav'>
                    <li>
                        <Link to="/">Pokemon</Link>
                    </li>
                    <li>
                        <Link to="/starwars">Star Wars</Link>
                    </li>   
                    <li>
                        <Link to="/post">Post</Link>
                    </li>
                    <li>
                        <Link to="/userlist">User</Link>
                    </li>                    
                    <li>
                        <Link to="/login">Login</Link>
                    </li>                                   
                </ul>
            </div>
        )
    }
}
export default Header


// : -- specifcying this can change 