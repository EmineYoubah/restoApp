import React, { useState } from "react";
import logo from '../image/food.png'
import '../header/header.css'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Header(){
    const {cartTotalQuantity}=useSelector((state)=>state.cart)
    const [menuOpen, setMenuOpen] = useState(false);
    let history=useHistory()
    
    function Profile(){
        history.push('/profile')
    }
    function gotoHome(){
        history.push('/home')
    }
    function Logout(){
        history.push('login')
    }

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return(
        <div className="header">
            <img src={logo} className='logo' alt="logo"></img>
            <div className="search-container">
                <input type='text' className="search-input" placeholder="Rechercher..."/>
                <button>Search</button>
            </div>

            {/* <button className="menu-toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                <button className="nav-button" onClick={gotoHome}>
                    <p>Home</p>
                </button>
                <button className="nav-button" onClick={Profile}>
                    <p>Profile</p>
                </button>  
                <button className="nav-button" onClick={Logout}>
                    <p>Log out</p>
                </button>  
            </div> */}
        </div>
    )
}

export default Header