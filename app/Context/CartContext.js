"use client"
import React, { createContext, useState } from 'react'

export const CartContext=createContext();

export default function Cartprovider({children}) {
    const[cart,setCart]=useState([]);

    // product add to cart function
    function addToCart(product) {
    setCart((previousCart) => {
        const alreadyAdded = previousCart.some(
            (item) => item.id === product.id
        );

        if (alreadyAdded) {
            return previousCart;
        }

        return [...previousCart, product];
    });
}

    //product remove from cart function
    function removeFromCart(id){
        setCart((previouscart)=>previouscart.filter((item)=>item.id !==id))
    }

  return (
    <div>
        <CartContext.Provider value={{cart,setCart,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    </div>
  )
}
