import React from 'react';
import type {IProduct} from "../models/IProduct.ts";


interface Prop {
    product:IProduct;
}

export const ProductCard: React.FC<Prop> = ({ product }: Prop) => {
    return (
        <div className="bg-white shadow-md rounded p-6 mb-10">
            <h2 className="text-2xl font-semibold mb-2 text-blue-700">
                {product.title} – {product.price} UAH
            </h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                {product.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
            {product.available ? (
                <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded">
                    Купить
                </button>
            ) : (
                <p className="text-gray-400 italic">Нет в наличии</p>
            )}
        </div>
    );
};


