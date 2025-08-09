import './App.css'
import {useFetch} from "./hooks/useFetch.ts";

function App() {
  const users = useFetch<{id:number,name:string}[]>('https://jsonplaceholder.typicode.com/users', []);
  return (
    <div>
      {users.map((user:{id:number,name:string}) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>ID: {user.id}</p>
        </div>
      ))
      }
    </div>
  )
}

export default App
