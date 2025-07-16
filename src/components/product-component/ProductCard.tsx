import type {FC} from "react";
import type {IProduct} from "../../models/IProduct.ts";

interface Props {
    product: IProduct;
    onSelect: () => void;
}

export const ProductCard: FC<Props> = ({product, onSelect}) => {
    return (
        <div
            onClick={onSelect}
            className="border p-4 rounded shadow hover:shadow-lg cursor-pointer transition"
        >
            <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-contain mb-2"
            />
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600">{product.price} $</p>
        </div>
    );
};


