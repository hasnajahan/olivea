
import ProductServices from "../../services/productServices";
import ProductDetailsClient from "./ProductDetailsClient";
import "./productdetails.css";

export const instant = false;

export default async function ProductDetails({ params }) {
    const { id } = await params;

    const product = await ProductServices.getProductById(id);

    if (!product) {
        return (
            <main className="product-details-page">
                <h1 className="not-found">Product not found</h1>
            </main>
        );
    }

    return <ProductDetailsClient product={product} />;
}
