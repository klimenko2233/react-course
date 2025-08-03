import {useForm} from "react-hook-form";
import type {ICar} from "../../models/ICar.ts";
import {createCar} from "../../services/api.service.tsx";
import {carValidator} from "../../validators/CarValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";

export const CreateFormComponent = () => {
    const {register, handleSubmit, formState: { errors },reset} = useForm<ICar>({
        mode: "all",
        resolver: joiResolver(carValidator),
    });

    const createHandler = (data: ICar) => {
        createCar(data);
        reset();
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">Create New Car</h2>
            <form onSubmit={handleSubmit(createHandler)} className="space-y-4">
                <div>
                    <input
                        type="text"
                        {...register("brand")}
                        placeholder="Brand"
                        className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                    {errors.brand && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.brand.message}
                        </p>
                    )}
                </div>
                <div>
                    <input
                        type="number"
                        {...register("price")}
                        placeholder="Price"
                        className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                    {errors.price && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.price.message}
                        </p>
                    )}
                </div>
                <div>
                    <input
                        type="number"
                        {...register("year")}
                        placeholder="Year"
                        className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                    {errors.year && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.year.message}
                        </p>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
                >
                    Create
                </button>
            </form>
        </div>
    );
};
