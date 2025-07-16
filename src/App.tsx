import {useEffect, useState} from "react";
import './App.css';
import type {IProduct} from "./models/IProduct";
import {getProducts} from "./service/api.service.ts";
import {ProductDetails} from "./components/products-component/ProductDetails.tsx";
import {ProductCard} from "./components/product-component/ProductCard.tsx";

function App() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

    useEffect(() => {
        getProducts().then(res => setProducts(res.products));
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Products</h1>

            {selectedProduct ? (
                <div>
                    <button
                        className="mb-4 text-blue-500 cursor-pointer"
                        onClick={() => setSelectedProduct(null)}
                    >
                        ← Back To Products
                    </button>
                    <ProductDetails product={selectedProduct}/>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onSelect={() => setSelectedProduct(product)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;


