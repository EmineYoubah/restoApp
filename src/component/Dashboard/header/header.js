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
        history.push('/restoApp')
    }
    function plats(){
        history.push('/restoApp/Plats')
    }
    function entries(){
        history.push('/restoApp/Entries')
    }
    function boisson(){
        history.push('/restoApp/Boisson')
    }
    function dessert(){
        history.push('/restoApp/Dessert')
    }
    function salades(){
        history.push('/restoApp/Salades')
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