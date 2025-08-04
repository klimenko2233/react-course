import {useForm} from "react-hook-form";
import {type FC, useEffect} from "react";
import type {ICar} from "../../models/ICar.ts";
import {updateCar} from "../../services/api.service.tsx";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/CarValidator.ts";

type EditFormProps = {
    car: ICar;
    onCancel: () => void;
    onSuccess: (updatedCar: ICar) => void;
};

export const EditForm: FC<EditFormProps> = ({ car, onCancel, onSuccess }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ICar>({
        defaultValues: car,
        resolver: joiResolver(carValidator),
    });

    useEffect(() => {
        reset(car);
    }, [car, reset]);

    const onSubmit = async (data: ICar) => {
        if (car.id) {
            const updated = { ...data, id: car.id };
            try {
                await updateCar(car.id, updated);
                onSuccess(updated);
            } catch (e) {
                console.error("❌ Error updating car:", e);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold">Edit Car</h2>

            <input {...register("brand")} placeholder="Brand" className="border border-gray-300 rounded px-3 py-2 w-full" />
            {errors.brand && <p className="text-red-500">{errors.brand.message}</p>}

            <input {...register("price")} placeholder="Price" type="number" className="border border-gray-300 rounded px-3 py-2 w-full" />
            {errors.price && <p className="text-red-500">{errors.price.message}</p>}

            <input {...register("year")} placeholder="Year" type="number" className="border border-gray-300 rounded px-3 py-2 w-full" />
            {errors.year && <p className="text-red-500">{errors.year.message}</p>}

            <div className="flex space-x-2">
                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
                >
                    Save
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded transition"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};


