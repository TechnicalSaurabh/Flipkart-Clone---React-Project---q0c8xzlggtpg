import React from 'react'
import { useStateValue } from './CartContext'
import "./CartProducts.css"

const CartProducts = ({ id, imagesrc, description, price, quantity }) => {
    const [{ basket }, dispatch] = useStateValue();
    const inreasequantity = () => {
        dispatch({
            type: "ADD_QUANTITY",
            id
        })
    }

    const removefrombasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id
        })
    }

    const decreasequantity = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id
        })
    }
    return (
        <div className='cart_products'>
            <div className='cart_products_image'>
                <img src={imagesrc} />
            </div>
            <div className='cart_products_description'>
                <h2>{description}</h2>
                <div>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                </div>
                <div className='price'>
                    <span>{price}</span>
                    <span> 75% OFF </span>
                    <div className='product_quantity'>
                        <p>Quantity</p>
                        <button onClick={decreasequantity} className='increse_quantity'>-</button>
                        <p>{quantity}</p>
                        <button onClick={inreasequantity} className='increse_quantity'>+</button>
                    </div>
                </div>
                <button onClick={removefrombasket} className='remove_button'>Remove to cart</button>
            </div>
        </div>
    )
}

export default CartProducts
