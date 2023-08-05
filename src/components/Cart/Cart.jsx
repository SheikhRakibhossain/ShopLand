import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // const cart =props.cart option=1
    // const {cart} = props option=2
    console.log(cart);
    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;

    for(const product of cart){
        totalPrice = totalPrice + product.price * product.quantity;
        shipping = shipping + product.shipping;
        product.quantity = product.quantity || 1;
        quantity = quantity + product.quantity;
    }

const tax = totalPrice*5/100;
const grandTotal = totalPrice + shipping + tax;
    return (
        <div className='cart'>

            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price ${totalPrice} </p>
            <p>Shipping Charge ${shipping}</p>
            <p>Tax ${tax.toFixed(2)}</p>
            <p>Grand Total ${grandTotal}</p>

            <div className='cartBtn'>
                <button> Clear Cart </button>
                <button>Review Cart</button>
            </div>
        </div>
    );
};

export default Cart;