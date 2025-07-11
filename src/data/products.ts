import type { IProduct } from '../models/IProduct';
export const productsArray: IProduct[] = [
    {
        title: 'Ноутбук ASUS',
        price: 20000,
        description: 'Мощный ноутбук для работы и игр',
        tags: ['i7', '16GB RAM', 'SSD'],
        available: true,
    },
    {
        title: 'Наушники Sony',
        price: 3000,
        description: 'Беспроводные с шумоподавлением',
        tags: ['Bluetooth', 'Noise-canceling'],
        available: false,
    },
];
