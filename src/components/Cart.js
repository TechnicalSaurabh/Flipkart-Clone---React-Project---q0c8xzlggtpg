import React from 'react'
import "./cart.css"
import { useStateValue } from './CartContext'
import CartProducts from './CartProducts'
import { gettotalvalue, totalitems } from './reducer'

const Cart = () => {
    const [{ basket }, dispatch] = useStateValue();

    const proceedpayment = () => {
        dispatch({
            type: "EMPTY_BASKET"
        })
        alert("payment has been done and order product succesfully")
    }
    console.log(basket)
    return (
        <div className='cart'>
            <h1 className='cart_heading'>Cart({totalitems(basket)})</h1>
            <hr></hr>
            <div className='cart_items'>
                {
                    basket?.map((item) => {
                        return (
                            <>
                                <CartProducts id={item.id} imagesrc={item.image} price={item.price} description={item.title} quantity={item.quantity} />
                            </>
                        )
                    })
                }
            </div>
            <hr></hr>
            <div className='subtotal'>
                {
                    basket.length <= 0 ? <img className='emptybasket' src="https://shop.millenniumbooksource.com/static/images/cart1.png" /> : <>       <p>Subtotal:-</p>
                        <p>({gettotalvalue(basket)})</p>
                        <div>
                            <p>Items:-</p>
                            <p>({totalitems(basket)})</p>
                        </div>
                        <button style={{ margin: "10px", backgroundColor: "rgb(197, 131, 9)" }} onClick={proceedpayment} >Proceed to payment</button></>
                }
            </div>
        </div>
    )
}

export default Cart
