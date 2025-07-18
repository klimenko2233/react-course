import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";

interface Props {
    user:IUser;
}

export const UserDetails:FC<Props> = ({user}) => {
    const {
        firstName,
        lastName,
        age,
        gender,
        email,
        phone,
        username,
        birthDate,
        image,
        eyeColor,
        height,
        weight,
        bloodGroup,
        hair,
        address,
        company,
        bank,
        crypto,
    } = user;

    return (
        <div className="max-w-xl mx-auto p-4 bg-white rounded-2xl shadow-md">
            <div className="flex items-center gap-4 mb-4">
                <img src={image} alt={`${firstName} ${lastName}`} className="w-24 h-24 rounded-full object-cover" />
                <div>
                    <h2 className="text-2xl font-bold">{firstName} {lastName}</h2>
                    <p className="text-gray-600">{username}</p>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Основная информация</h3>
                <ul className="text-gray-700 space-y-1">
                    <li><strong>Возраст:</strong> {age}</li>
                    <li><strong>Пол:</strong> {gender}</li>
                    <li><strong>Дата рождения:</strong> {birthDate}</li>
                    <li><strong>Цвет глаз:</strong> {eyeColor}</li>
                    <li><strong>Группа крови:</strong> {bloodGroup}</li>
                    <li><strong>Рост:</strong> {height} см</li>
                    <li><strong>Вес:</strong> {weight} кг</li>
                    <li><strong>Волосы:</strong> {hair.color} / {hair.type}</li>
                </ul>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Контакты</h3>
                <ul className="text-gray-700 space-y-1">
                    <li><strong>Email:</strong> {email}</li>
                    <li><strong>Телефон:</strong> {phone}</li>
                </ul>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                <ul className="text-gray-700 space-y-1">
                    <li><strong>Адрес:</strong> {address.address}</li>
                    <li><strong>Город:</strong> {address.city}</li>
                    <li><strong>Почтовый индекс:</strong> {address.postalCode}</li>
                    <li><strong>Штат:</strong> {address.state}</li>
                    <li><strong>Координаты:</strong> {address.coordinates.lat}, {address.coordinates.lng}</li>
                </ul>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Компания</h3>
                <ul className="text-gray-700 space-y-1">
                    <li><strong>Название:</strong> {company.name}</li>
                    <li><strong>Отдел:</strong> {company.department}</li>
                    <li><strong>Должность:</strong> {company.title}</li>
                    <li><strong>Адрес:</strong> {company.address.address}, {company.address.city}</li>
                </ul>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Банк</h3>
                <ul className="text-gray-700 space-y-1">
                    <li><strong>Карта:</strong> {bank.cardNumber}</li>
                    <li><strong>IBAN:</strong> {bank.iban}</li>
                    <li><strong>Валюта:</strong> {bank.currency}</li>
                    <li><strong>Баланс:</strong> ${bank.cardExpire}</li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-2">Криптовалюта</h3>
                <ul className="text-gray-700 space-y-1">
                    <li><strong>Коин:</strong> {crypto.coin}</li>
                    <li><strong>Адрес:</strong> {crypto.wallet}</li>
                    <li><strong>Key:</strong> {crypto.network}</li>
                </ul>
            </div>
        </div>
    );
};