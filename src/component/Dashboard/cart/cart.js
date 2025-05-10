import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { clearCartItem, decreaseCart, getTotals, addTocart, removeCartItem } from './cartslice'
import Header from '../header/header'
import Footer from '../footer/footer'
import './cart.css'

function Cart() {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch])

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeCartItem(cartItem))
    }

    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem))
    }

    const handleIncreaseCart = (cartItem) => {
        dispatch(addTocart(cartItem))
    }

    const handleClearCart = () => {
        dispatch(clearCartItem())
    }

    const handleOrder = () => {
        alert('Your order placed successfully!!')
        dispatch(clearCartItem())
        history.push('/home')
    }

    return (
        <div className="page-container">
            <Header />
            <div className="content-wrap">
                <div className="cart-container-page">
                    <h2 className="cart-heading">Votre Panier</h2>
                    
                    {cart.cartItems.length === 0 ? (
                        <div className="cart-empty">
                            <p>Votre panier est vide</p>
                            <button onClick={() => history.push('/home')} className="start-shopping">
                                Commencer vos achats
                            </button>
                        </div>
                    ) : (
                        <div className="cart-items-container">
                            {cart.cartItems?.map(cartItem => (
                                <div key={cartItem.id} className="cart-item-card">
                                    <img 
                                        src={cartItem.url} 
                                        alt={cartItem.title} 
                                        className="cart-item-image"
                                        onClick={() => history.push(`/singledish?id=${cartItem.id}`)}
                                    />
                                    <div className="cart-item-info">
                                        <h3 className="cart-item-title">{cartItem.title}</h3>
                                        <p className="cart-item-price">₹{cartItem.rate}</p>
                                        
                                        <div className="cart-item-quantity">
                                            <button 
                                                className="quantity-button"
                                                onClick={() => handleDecreaseCart(cartItem)}
                                            >
                                                -
                                            </button>
                                            <span className="quantity-value">{cartItem.cartQuantity}</span>
                                            <button 
                                                className="quantity-button"
                                                onClick={() => handleIncreaseCart(cartItem)}
                                            >
                                                +
                                            </button>
                                            <button 
                                                className="remove-button"
                                                onClick={() => handleRemoveFromCart(cartItem)}
                                            >
                                                Supprimer
                                            </button>
                                        </div>
                                        <div className="cart-item-total">
                                            <span>Total: ₹{cartItem.cartQuantity * cartItem.rate}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="cart-summary">
                                <div className="cart-total">
                                    <span>Total:</span>
                                    <span>₹{cart.totalAmount}</span>
                                </div>
                                <div className="cart-actions">
                                    <button className="clear-cart" onClick={handleClearCart}>
                                        Vider le panier
                                    </button>
                                    <button className="checkout-button" onClick={handleOrder}>
                                        Commander
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart