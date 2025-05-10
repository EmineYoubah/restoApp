import React, { useState } from "react";
import Food from "../../../foodimage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import '../categories/categories.css'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addTocart, getTotals } from "../../cart/cartslice";

function Singledish() {
    const dispatch = useDispatch()
    const location = useLocation();
    const history = useHistory()
    const [detail, setdetail] = useState({})

    useEffect(() => {
        let data = Food.filter((ele) => ele.id == query.get('id'));
        setdetail(data[0])
    }, [])

    const cart = useSelector((state) => state.cart)
    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch])

    function AddtoCart(detail) {
        dispatch(addTocart(detail))
    }

    let query = new URLSearchParams(location.search)

    function order() {
        history.push('/cart')
    }

    return (
        <div className="page-container">
            <Header />
            <div className="content-wrap">
                <div className="sfp-main">
                    <div className="sfp-first">
                        <img src={detail.url} alt={detail.title} />
                    </div>
                    <div className="spf-second">
                        <h1>{detail.title}</h1>
                        <h3>Quantité : {detail.quantity}</h3>
                        <h1 className="price">₹{detail.rate}</h1>
                        
                        <div className="description">
                            <span>Description :</span>
                            <p>{detail.description}</p>
                        </div>
                        
                        <div className="availability">
                            <span>Disponible uniquement de :</span>
                            <p>9h à 21h</p>
                        </div>
                        
                        <div className="action-buttons">
                            <button onClick={() => AddtoCart(detail)} className="add-cart-btn">
                                + Ajouter au panier
                            </button>
                            {/* <button onClick={order} className="order-btn">
                                Commander
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="floating-cart" onClick={order}>
                <img src="/src/component/Dashboard/image/cart.jpg" alt="cart" />
                <span className="cart-badge">{cart.cartTotalQuantity}</span>
            </div>
            <Footer />
        </div>
    )
}

export default Singledish