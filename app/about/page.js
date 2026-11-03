import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./about.css";

export default function About() {
    return (
        <main className="about-page">

            {/* Hero section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <p className="about-eyebrow">THE STORY OF OLIVÉA</p>

                    <h1>
                        Beauty in
                        <br />
                        the <span>Everyday.</span>
                    </h1>

                    <p className="about-hero-description">
                        A thoughtful approach to style, where timeless design
                        meets the beauty of simplicity.
                    </p>

                    <a href="#our-story" className="about-discover-link">
                        DISCOVER OUR STORY
                        <span>↓</span>
                    </a>
                </div>

                <div className="about-hero-image">
                    <Image
                        src="/p31.jpg"
                        alt="A curated OLIVÉA fashion piece"
                        fill
                        priority
                        sizes="(max-width: 700px) 100vw, 50vw"
                    />
                    <div className="about-image-caption">
                        <span>OLIVÉA</span>
                        <span>TIMELESS BY NATURE</span>
                    </div>
                </div>
            </section>

            {/* Brand introduction */}
            <section className="about-intro" id="our-story">
                <p className="about-section-label">A LITTLE ABOUT US</p>

                <h2>
                    Style isn't about having more.
                    <br />
                    It's about choosing <em>well.</em>
                </h2>

                <p className="about-intro-description">
                    At OLIVÉA, we believe the most beautiful things are often
                    the simplest. Our collection brings together thoughtfully
                    selected fashion and accessories designed to complement
                    your everyday life with effortless elegance.
                </p>
            </section>

            {/* Brand values */}
            <section className="about-values">
                <div className="about-values-heading">
                    <p className="about-section-label">THE OLIVÉA WAY</p>
                    <h2>What We Believe In</h2>
                </div>

                <div className="about-values-grid">
                    <article className="about-value-card">
                        <span className="about-value-number">01</span>
                        <h3>Timeless Style</h3>
                        <p>
                            Pieces chosen for their lasting appeal, beyond
                            passing trends and seasons.
                        </p>
                    </article>

                    <article className="about-value-card">
                        <span className="about-value-number">02</span>
                        <h3>Thoughtful Choices</h3>
                        <p>
                            A considered collection that makes discovering
                            your personal style feel effortless.
                        </p>
                    </article>

                    <article className="about-value-card">
                        <span className="about-value-number">03</span>
                        <h3>Everyday Elegance</h3>
                        <p>
                            Little details that bring a sense of confidence
                            and beauty to the everyday.
                        </p>
                    </article>
                </div>
            </section>

            {/* Closing section */}
            <section className="about-closing">
                <p className="about-section-label">LESS, BUT BETTER</p>

                <h2>
                    Find pieces that
                    <br />
                    feel like <em>you.</em>
                </h2>

                <p>
                    Discover a collection made for your own sense of style.
                </p>

                <Link href="/products" className="about-shop-button">
                    EXPLORE THE COLLECTION
                </Link>
            </section>

        </main>
    );
}