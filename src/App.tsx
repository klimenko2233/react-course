import './App.css'
import React from "react";
import {usersArray} from "./data/users.ts";
import {UserCard} from "./components/UserCard.tsx";
import type {IUser} from "./model/IUser.ts";

const App:React.FC =()=> {
  return (
      <div className="max-w-xl mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4 text-center">Пользователи</h1>
        {usersArray.map((card:IUser, index:number) => (
            <UserCard key={index} card={card} />
        ))}
      </div>
  );
}

export default App
