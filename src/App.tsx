import './App.css'
import React from "react";
import {productsArray} from "./data/products.ts";
import {ProductCard} from "./components/ProductCard.tsx";

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 px-4 py-10">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center text-purple-800">Товары</h1>
                {productsArray.map((item, index: number) => (
                    <ProductCard key={index} product={item} />
                ))}
            </div>
        </div>
    );
};

export default App
