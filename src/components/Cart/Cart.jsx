import React from 'react';

const Cart = ({ cart }) => {
    // const cart =props.cart option=1
    // const {cart} = props option=2
    console.log(cart);
    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        totalPrice = totalPrice + product.price * product.quantity;
        shipping = shipping + product.shipping;
        product.quantity = product.quantity || 1;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice * 5 / 100;
    const grandTotal = totalPrice + shipping + tax;
    return (
        <div className='cart fixed top-80px right-10'>

            <h4 className='text-3xl font-bold text-center '>Order Summary</h4>
                <div className="divider"></div>
            <p className='text-xl leading-relaxed '>Selected Items: {quantity}</p>
            <p className='text-xl leading-relaxed '>Total Price ${totalPrice} </p>
            <p className='text-xl leading-relaxed '>Shipping Charge ${shipping}</p>
            <p className='text-xl leading-relaxed '>Tax ${tax.toFixed(2)}</p>
            <p className='text-xl font-bold leading-relaxed '>Grand Total ${grandTotal}</p>

            <div className=''>
                <button className='btn btn-warning'> Clear Cart </button>
                <button className='btn btn-secondary'>Review Cart</button>
            </div>
        </div>
    );
};

export default Cart;