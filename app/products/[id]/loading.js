
import "./loading.css";

export default function Loading() {
    return (
        <main className="product-details-page">
            <div className="details-skeleton-container">

                {/* Product Image Placeholder */}
                <div className="details-skeleton-image"></div>

                {/* Product Information Placeholder */}
                <div className="details-skeleton-info">

                    <div className="skeleton skeleton-detail-category"></div>

                    <div className="skeleton skeleton-detail-title"></div>

                    <div className="skeleton skeleton-detail-rating"></div>

                    <div className="skeleton skeleton-detail-price"></div>

                    <div className="skeleton skeleton-detail-heading"></div>

                    <div className="skeleton skeleton-detail-description"></div>

                    <div className="skeleton skeleton-detail-description short"></div>

                    <div className="skeleton skeleton-detail-button"></div>

                </div>

            </div>
        </main>
    );
}
