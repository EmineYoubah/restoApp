import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import cartimg from '../image/cart.jpg';
import { getTotals } from './cartslice';
import './cart.css';

function FloatingCart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleCartClick = () => {
        history.push('/cart');
    };

    // Calculer le nombre total d'articles
    const totalItems = cart.cartItems.reduce((total, item) => total + item.cartQuantity, 0);

    return (
        <button className="floating-cart" onClick={handleCartClick}>
            <img src={cartimg} alt="cart" />
            {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
            )}
        </button>
    );
}

export default FloatingCart;
