import React from 'react';
import type {IUser} from '../model/IUser.ts';
interface Prop {
    card:IUser;
}

export const UserCard:React.FC<Prop> = ({card}) => {
    return (
        <div className="border p-4 mb-2 rounded shadow">
            <h3 className="font-bold text-lg">{card.name}</h3>
            <p>📧 {card.email}</p>
            <p>🎂 {card.age} лет</p>
        </div>
    );
};
