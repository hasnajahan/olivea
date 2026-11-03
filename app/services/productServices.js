
class ProductServices {
    static async getProducts() {
        "use cache";

        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

        const response = await fetch(`${baseUrl}/api/products`);

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const result = await response.json();

        return result.data;
    }

    static async getProductById(id) {
        const products = await this.getProducts();

        for (let product of products) {
            if (product.id === Number(id)) {
                return product;
            }
        }
    }
}

export default ProductServices;
