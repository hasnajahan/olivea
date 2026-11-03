
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../Header/Header";
import "../../products/products.css";

import "./search.css"

export default function Searching({ products, category, limit }) {
    const [search, setSearch] = useState("");

    let filteredProducts = products;

    if (category) {
        filteredProducts = filteredProducts.filter(
            (prod) =>
                prod.category.toLowerCase() === category.toLowerCase()
        );
    }

    if (search) {
        filteredProducts = filteredProducts.filter(
            (prod) =>
                prod.title.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (limit) {
        filteredProducts = filteredProducts.slice(0, Number(limit));
    }

    return (
        <>
            <Header search={search} setSearch={setSearch} />

            <main className="products-page">

                <section className="products-heading">
                    <p className="products-subtitle">THE OLIVÉA COLLECTION</p>
                    <h1>Discover Your Style</h1>
                    <p className="products-description">
                        Thoughtfully chosen pieces for a wardrobe that feels
                        timeless, effortless, and entirely yours.
                    </p>
                </section>


                <div className="products-toolbar">
                    <p>Explore the collection</p>
                    <span>
                        {filteredProducts.length} thoughtfully selected pieces
                    </span>
                </div>

                <div className="products-grid">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((prod) => (
                            <Link
                                href={`/products/${prod.id}`}
                                className="product-card-link"
                                key={prod.id}
                            >
                                <article className="product-card">
                                    <div className="product-image">
                                        <Image
                                            src={prod.image}
                                            alt={prod.title}
                                            fill
                                            sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 25vw"
                                        />

                                        <span className="view-product">
                                            Discover Piece
                                        </span>
                                    </div>

                                    <div className="product-info">
                                        <p className="product-category">
                                            {prod.category}
                                        </p>

                                        <h2>{prod.title}</h2>

                                        <p className="product-description">
                                            {prod.description}
                                        </p>

                                        <div className="product-meta">
                                            <p className="product-price">
                                                ₹{prod.price.toLocaleString("en-IN")}
                                            </p>

                                            <div
                                                className="product-rating"
                                                aria-label={`Rated ${prod.rating} out of 5`}
                                            >
                                                <span className="rating-star">★</span>
                                                <span>{prod.rating}</span>
                                                <span className="rating-count">
                                                    ({prod.count})
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))
                    ) : (
                        <p>No products found.</p>
                    )}
                </div>
            </main>
        </>
    );
}
