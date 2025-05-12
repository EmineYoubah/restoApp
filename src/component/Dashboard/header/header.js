import React, { useState } from "react";
import logo from '../image/food.png'
import '../header/header.css'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Header(){
    const {cartTotalQuantity}=useSelector((state)=>state.cart)
    const [menuOpen, setMenuOpen] = useState(false);
    let history=useHistory()
    
    function Accueil(){
        history.push('/')
    }
    function plats(){
        history.push('Plats')
    }
    function entries(){
        history.push('Entries')
    }
    function boisson(){
        history.push('Boisson')
    }
    function dessert(){
        history.push('Dessert')
    }
    function salades(){
        history.push('Salades')
    }

    

    return(
        <div className="header">
            {/* <img src={logo} className='logo' alt="logo"></img> */}
            <div className="search-container">
                <button onClick={()=>Accueil()}>Accueil</button>
                <button onClick={()=>plats()}>Plats</button>
                <button onClick={()=>entries()}>Entries</button>
                <button onClick={()=>boisson()}>Boisson</button>
                <button onClick={()=>dessert()}>Dessert</button>
                <button onClick={()=>salades()}> Salades</button>

            </div>

           
        </div>
    )
}

export default Header