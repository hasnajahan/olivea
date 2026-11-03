
"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { CartContext } from "@/app/Context/CartContext";
import "./header.css";

export default function Header({ search = "", setSearch = () => {} }) {
    const { cart } = useContext(CartContext);
    const cartCount = cart.length;

    return (
        <header className="site-header">
            <Link href="/" className="brand">
                OLIVÉA
            </Link>

            <nav className="header-nav">
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact Us</Link>
            </nav>

            <div className="header-actions">
                <div className="header-search">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="7" />
                        <path d="m16 16 4 4" />
                    </svg>

                    <input
                        type="search"
                        placeholder="Search products..."
                        aria-label="Search products"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <Link
                    href="/cart"
                    className="luxury-cart"
                    aria-label={`Shopping cart with ${cartCount} items`}
                >
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M5 8h14l1 13H4L5 8Z" />
                        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                    </svg>

                    <span className="cart-count">{cartCount}</span>
                </Link>
            </div>
        </header>
    );
}
