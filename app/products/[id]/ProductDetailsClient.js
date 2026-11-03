
"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CartContext } from "@/app/Context/CartContext";

export default function ProductDetailsClient({ product }) {
    const { addToCart } = useContext(CartContext);
    const router = useRouter();

    function handleAddToCart() {
        addToCart(product);
        router.push("/cart");
    }

    return (
        <main className="product-details-page">
            <div className="product-details-container">
                <div className="product-details-image">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                <div className="product-details-info">
                    <p className="product-category">
                        {product.category}
                    </p>

                    <h1>{product.title}</h1>

                    <p className="product-rating">
                        ★ {product.rating}
                        <span> ({product.count} reviews)</span>
                    </p>

                    <p className="product-price">
                        ₹{product.price.toLocaleString("en-IN")}
                    </p>

                    <div className="product-details-description">
                        <h3>Product Description</h3>
                        <p>{product.detailedDescription}</p>
                    </div>

                    <button
                        className="add-to-cart-btn"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>

                    <p className="product-note">
                        A softer kind of luxury.
                    </p>
                </div>
            </div>
        </main>
    );
}
