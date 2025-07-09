import './App.css'
import {coursesTitleArray} from "../arrays.ts";

const App = () => {
  return (
    <>
      <ul>
        {coursesTitleArray.map((course, index) => <li key={index}>{course}</li>)}
      </ul>
    </>
  )
}

export default App
