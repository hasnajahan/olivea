import data from "../data/products";

class ProductServices {
    static async getProducts() {
        "use cache";

        return data;
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