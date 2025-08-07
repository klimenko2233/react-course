import { useEffect } from "react";
import { loadAuthProducts } from "../services/api.service.ts";

export const AuthProductsPage = () => {

    useEffect(() => {
        loadAuthProducts()
            .then(products => console.log("Loaded products:", products))
            .catch(error => {
                console.error("Failed to load auth products:", error);
            });
    }, []);

    return (
        <div>
            <h1>Auth Products Page</h1>
        </div>
    );
};
