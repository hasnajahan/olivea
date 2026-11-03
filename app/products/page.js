
import React, { Suspense } from "react";
import ProductServices from "../services/productServices";
import Searching from "../components/Search/Searching";

async function ProductList({ searchParams }) {
    const products = await ProductServices.getProducts();
    const params = await searchParams;

    return (
        <Searching
            products={products}
            category={params.category}
            limit={params.limit}
        />
    );
}

export default function Products({ searchParams }) {
    return (
        <Suspense fallback={<p>Loading products...</p>}>
            <ProductList searchParams={searchParams} />
        </Suspense>
    );
}
