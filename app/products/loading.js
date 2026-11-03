
import Header from "../components/Header/Header";
import "./loading.css";

export default function Loading() {
    return (
        <>
            <Header />

            <main className="products-page">
                <section className="products-heading">
                    <div className="skeleton skeleton-subtitle"></div>
                    <div className="skeleton skeleton-title"></div>
                    <div className="skeleton skeleton-description"></div>
                </section>

                <div className="skeleton-products-grid">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div className="skeleton-product-card" key={index}>
                            <div className="skeleton skeleton-product-image"></div>

                            <div className="skeleton-product-info">
                                <div className="skeleton skeleton-category"></div>
                                <div className="skeleton skeleton-product-title"></div>
                                <div className="skeleton skeleton-price"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
