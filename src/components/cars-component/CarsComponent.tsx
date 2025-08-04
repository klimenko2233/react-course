import {useEffect, useState} from "react";
import type {ICar} from "../../models/ICar.ts";
import {deleteCar, getCars} from "../../services/api.service.tsx";
import {CarComponent} from "../car-component/CarComponent.tsx";
import {EditForm} from "../edit-form/EditForm.tsx";

export const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([])
    const [editingCar, setEditingCar] = useState<ICar | null>(null);

    useEffect(() => {
        getCars().then(cars => setCars(cars))
    }, []);

    const handleDelete = (id: number) => {
        deleteCar(id).then(() => {
            setCars(prevCars => prevCars.filter(car => car.id !== id));
        });
    };



    return (
        <div>
            {editingCar ? (
                <EditForm
                    car={editingCar}
                    onCancel={() => setEditingCar(null)}
                    onSuccess={(updatedCar) => {
                        setCars(prev =>
                            prev.map(c => c.id === updatedCar.id ? updatedCar : c)
                        );
                        setEditingCar(null);
                    }}
                />
            ) : (
                cars.map(car => (
                    <CarComponent key={car.id} car={car} onDelete={handleDelete} onEdit={setEditingCar}/>
                ))
            )}
        </div>
    )
}
