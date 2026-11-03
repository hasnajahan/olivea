
import Image from "next/image";
import Link from "next/link";

import Header from "./components/Header/Header";
import "./home.css";

const collections = [
    {
        id: 1,
        category: "FASHION",
        title: "Elegant Dresses",
        description: "Effortless elegance for every occasion.",
        image: "/h1.jpg",
    },
    {
        id: 2,
        category: "ACCESSORIES",
        title: "Everyday Bags",
        description: "Beautiful details that complete your look.",
        image: "/h2.jpg",
    },
    {
        id: 3,
        category: "FASHION",
        title: "Timeless Tops",
        description: "Everyday essentials with a refined touch.",
        image: "/h3.jpg",
    },
    {
        id: 4,
        category: "JEWELLERY",
        title: "Delicate Jewellery",
        description: "Subtle pieces that make a statement.",
        image: "/h4.jpg",
    },
];

export default function Home() {
    return (
        <>
            <Header />

            <main className="home-page">

                {/* Hero Banner */}
                <section className="hero-section">
                    <Image
                        src="/banner.png"
                        alt="OLIVÉA luxury olive fashion editorial banner"
                        width={1672}
                        height={941}
                        priority
                        sizes="100vw"
                        className="hero-banner-image"
                    />
                </section>

                {/* Featured Collections */}
                <section className="home-products">

                    <div className="home-section-heading">
                        <p className="section-subtitle">
                            THE OLIVÉA COLLECTION
                        </p>

                        <h2>Discover Your Style</h2>

                        <span>
                            Thoughtfully selected pieces to bring
                            elegance to your everyday style.
                        </span>
                    </div>

                    <div className="home-product-grid">

                        {collections.map((item) => (
                            <Link
                                href="/products"
                                className="home-product-link"
                                key={item.id}
                            >
                                <article className="home-product-card">

                                    <div className="home-product-image">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 600px) 50vw, (max-width: 1000px) 50vw, 25vw"
                                        />

                                        <div className="image-explore">
                                            EXPLORE COLLECTION →
                                        </div>
                                    </div>

                                    <div className="home-product-info">

                                        <p className="collection-category">
                                            {item.category}
                                        </p>

                                        <h3>{item.title}</h3>

                                        <span className="collection-description">
                                            {item.description}
                                        </span>

                                        <div className="collection-link">
                                            Discover More <span>↗</span>
                                        </div>

                                    </div>

                                </article>
                            </Link>
                        ))}

                    </div>

                    <div className="home-view-all">
                        <Link href="/products">
                            EXPLORE ALL PRODUCTS <span>→</span>
                        </Link>
                    </div>

                </section>

                {/* Closing Brand Section */}
                <section className="home-brand-section">
                    <p>THE ART OF EVERYDAY ELEGANCE</p>

                    <h2>
                        Style that feels
                        <span> effortlessly yours.</span>
                    </h2>

                    <Link href="/products">
                        DISCOVER OLIVÉA <span>→</span>
                    </Link>
                </section>

            </main>
        </>
    );
}
