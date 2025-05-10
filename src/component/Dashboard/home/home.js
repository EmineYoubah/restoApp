import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import Imageslide from "./Imageslides";
import Header from "../header/header";
import Indianfood from "./categories/Indianfood/Indianfood";
import Footer from "../footer/footer";
import Italianfood from "./categories/Italian food/Italianfood";
import { useSelector, useDispatch } from "react-redux";
import { getTotals } from "../cart/cartslice";
import { useEffect } from "react";
import Categories from "./categories/categories";
import Koreanfood from "./categories/korean food/Koreanfood";

// Import des images
import slide1 from '../image/slide1.jpg';
import slide2 from '../image/slide2.jpg';
import slide3 from '../image/slide3.jpg';

function Home(){
    const cart = useSelector((state) => state.cart);
    let dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);
    
    // Vérification des chemins d'images
    console.log('Images paths:', { slide1, slide2, slide3 });
    
    const slides = [
        { url: slide1, title: 'slide1'},
        { url: slide2, title: 'slide2'},
        { url: slide3, title: 'slide3'}
    ];
    
    return(
        <div className="home">
            <Header/>
            <div className="main-slice">
                <Imageslide slides={slides} />
            </div>
            <Categories />
            <div className="categories">
                <Indianfood />
                <Italianfood />
                <Koreanfood />
            </div>
            <Footer/>
        </div>
    );
}

export default Home;