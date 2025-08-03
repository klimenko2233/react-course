import type {ICar} from "../../models/ICar.ts";
import type {FC} from "react";

interface CarComponentProps {
    car: ICar
}

export const CarComponent: FC<CarComponentProps> = ({ car }) => {
    return (
        <div className="border border-gray-300 p-4 rounded-xl shadow-sm hover:shadow-md transition mb-4">
            <p className="text-sm text-gray-500">ID: {car.id}</p>
            <h2 className="text-xl font-bold mb-2">{car.brand}</h2>
            <p className="text-gray-700">💰 Price: ${car.price}</p>
            <p className="text-gray-700">📅 Year: {car.year}</p>
        </div>
    );
};
