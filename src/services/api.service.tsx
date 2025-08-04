import axios from 'axios'
import type {ICar} from "../models/ICar.ts";

const axiosInstance = axios.create({
    baseURL: 'http://185.69.152.209/carsAPI/v1',
    headers: {
        "Content-Type": "application/json",
    },
});

export const getCars = async ():Promise<ICar[]> => {
    const response = await axiosInstance.get<ICar[]>('/cars');
    return response.data;
}

export const createCar = async (car: ICar) => {
   await axiosInstance.post<ICar>('/cars', car);
}

export const deleteCar = async (id: number) => {
    await axiosInstance.delete(`/cars/${id}`);
}

export const updateCar = async (id: number, car: ICar) => {
    await axiosInstance.patch(`/cars/${id}`, car);
}