import React from "react";
import { Outlet, Link } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import {BiUser} from "react-icons/bi";
import "./Nav.css";

const Nav = () => {
    const reload = () => {
        window.location.reload();
    }
    return (
        <>
            <div className="nav__content">
                <Link to="/mate-proyecto-2"><RiHome2Line className="nav__content-icon"/></Link>
                <Link to="/mate-proyecto-2/integrantes"><BiUser className="nav__content-icon" id="users"/></Link>
            </div>

            <Outlet />
        </>
        
        
    )  
}

export default Nav;