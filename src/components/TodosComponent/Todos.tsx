import {useEffect, useState} from "react";
import type {TodoModel} from "../../models/TodoModel.ts";
import {loadTodos} from "../../service/api.service.ts";
import {Todo} from "../TodoComponent/Todo.tsx";


export const Todos = () => {
    const [todos, setTodos] = useState<TodoModel[]>([]);
    useEffect(() => {
        loadTodos().then(value => setTodos(value));
    }, []);
    return (
        <div>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo}/>)
            }
        </div>
    )
};