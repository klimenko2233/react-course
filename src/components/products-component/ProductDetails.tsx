import type {FC} from "react";
import type {IProduct} from "../../models/IProduct.ts";

interface Props {
    product: IProduct;
}

export const ProductDetails: FC<Props> = ({ product }) => {
    return (
        <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">{product.title}</h2>

            <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full max-h-72 object-contain rounded mb-6"
            />

            <p className="text-gray-700 mb-4">{product.description}</p>
            <div className="mb-4">
                <p><strong>Price:</strong> {product.price} $</p>
                <p><strong>Discount Percentage:</strong> {product.discountPercentage}%</p>
                <p><strong>Rating:</strong> {product.rating}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Brand:</strong> {product.brand}</p>
                <p><strong>Status:</strong> {product.availabilityStatus}</p>
                <p><strong>On stock:</strong> {product.stock} шт</p>
                <p><strong>Minimum order:</strong> {product.minimumOrderQuantity} шт</p>
                <p><strong>SKU:</strong> {product.sku}</p>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold">Dimensions:</h3>
                <p>{product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} </p>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold">Warranty / Shipping / Return:</h3>
                <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
                <p><strong>Shipping:</strong> {product.shippingInformation}</p>
                <p><strong>Return:</strong> {product.returnPolicy}</p>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold">Tags:</h3>
                <ul className="list-disc list-inside">
                    {product.tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold">Images:</h3>
                <div className="flex flex-wrap gap-4 mt-2">
                    {product.images.map((img, index) => (
                        <img key={index} src={img} alt={`product-img-${index}`} className="w-28 h-28 object-cover rounded" />
                    ))}
                </div>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold">Meta:</h3>
                <p><strong>Created:</strong> {product.meta.createdAt}</p>
                <p><strong>Updated:</strong> {product.meta.updatedAt}</p>
                <p><strong>Barcode:</strong> {product.meta.barcode}</p>
                <p><strong>QR-code:</strong> <img src={product.meta.qrCode} alt={'qr'}/></p>
            </div>

            {product.reviews.length > 0 && (
                <div className="mt-6">
                    <h3 className="font-semibold text-lg">Reviews:</h3>
                    {product.reviews.map((review, index) => (
                        <div key={index} className="border p-3 rounded mt-2 bg-gray-50">
                            <p><strong>Rating:</strong> {review.rating}</p>
                            <p><strong>Comment:</strong> {review.comment}</p>
                            <p><strong>Name:</strong> {review.reviewerName}</p>
                            <p><strong>Email:</strong> {review.reviewerEmail}</p>
                            <p className="text-sm text-gray-500">Дата: {review.date}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
