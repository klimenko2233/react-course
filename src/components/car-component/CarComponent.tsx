import type {ICar} from "../../models/ICar.ts";
import type {FC} from "react";

interface CarComponentProps {
    car: ICar
    onDelete: (id:number) => void;
    onEdit: (car:ICar) => void;
}

export const CarComponent: FC<CarComponentProps> = ({ car,onDelete,onEdit }) => {
    return (
        <div className="border border-gray-300 p-4 rounded-xl shadow-sm hover:shadow-md transition mb-4">
            <p className="text-sm text-gray-500">ID: {car.id}</p>
            <h2 className="text-xl font-bold mb-2">{car.brand}</h2>
            <p className="text-gray-700">💰 Price: ${car.price}</p>
            <p className="text-gray-700">📅 Year: {car.year}</p>
            <div className="flex space-x-2 mt-3">
                <button
                    onClick={() => onEdit(car)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                    Edit
                </button>
                <button
                    onClick={() => car.id && onDelete(car.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};
