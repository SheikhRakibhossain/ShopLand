import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


   useEffect(()=>{
// get the cart function
    const storedCart = getShoppingCart();
    const savedCart = []

    // find the cart id by using id
    for(const id in storedCart){
        const addedProduct = products.find(product =>product.id === id);
        //add the quantity
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            //push added product of our new arry
            savedCart.push(addedProduct);
        }
        console.log('Added product', addedProduct)
    }
    //set the saved cart product to the product state
    setCart(savedCart);

   },[products])

    const handleAddToCart = (product) => {
        // cart.push(product); 
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;