
"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "../Context/CartContext";
import './cart.css'

export default function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <>
        
        <main className="cart-page">
            <div className="cart-heading">
                <p>YOUR OLIVÉA SELECTION</p>
                <h1>Shopping Cart</h1>
            </div>

            {cart.length === 0 ? (
                <div className="empty-cart">
                    <h2>Your cart is empty</h2>
                    <p>Discover something beautiful for your wardrobe.</p>

                    <Link href="/products" className="continue-shopping">
                        Explore Collection
                    </Link>
                </div>
            ) : (
                <div className="cart-items">
                    {cart.map((item,index) => (
                        <div className="cart-item" key={`${item.id}-${index}`}>
                            <div className="cart-item-image">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="120px"
                                />
                            </div>

                            <div className="cart-item-info">
                                <p>{item.category}</p>
                                <h2>{item.title}</h2>

                                <h3>
                                    ₹{item.price.toLocaleString("en-IN")}
                                </h3>

                                <button
                                    className="remove-cart-item"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="cart-summary">
                        <h2>
                            Total: ₹
                            {cart
                                .reduce((total, item) => total + item.price, 0)
                                .toLocaleString("en-IN")}
                        </h2>

                        <Link href="/products" className="continue-shopping">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            )}
        </main>
        </>
    );
}
