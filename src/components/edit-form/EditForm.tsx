import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import {type FC, useEffect} from "react";
import type {ICar} from "../../models/ICar.ts";
import {carValidator} from "../../validators/CarValidator.ts";
import {updateCar} from "../../services/api.service.tsx";

type EditFormProps = {
    car: ICar;
    onCancel: () => void;
    onSuccess: (updatedCar: ICar) => void;
};

export const EditForm: FC<EditFormProps> = ({ car, onCancel, onSuccess }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ICar>({
        defaultValues: car,
        resolver: joiResolver(carValidator),
    });

    // 👇 Обновляем значения формы, если передан новый car
    useEffect(() => {
        reset(car);
    }, [car, reset]);

    const onSubmit = async (data: ICar) => {
        console.log("Submitting edit form with:", data);
        if (car.id) {
            const updated = { ...data, id: car.id };
            await updateCar(car.id, updated);
            onSuccess(updated);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold">Edit Car</h2>

            <input {...register("brand")} placeholder="Brand" className="w-full border px-3 py-2 rounded" />
            {errors.brand && <p className="text-red-500">{errors.brand.message}</p>}

            <input {...register("price")} placeholder="Price" type="number" className="w-full border px-3 py-2 rounded" />
            {errors.price && <p className="text-red-500">{errors.price.message}</p>}

            <input {...register("year")} placeholder="Year" type="number" className="w-full border px-3 py-2 rounded" />
            {errors.year && <p className="text-red-500">{errors.year.message}</p>}

            <div className="flex space-x-2">
                <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                    Save
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

