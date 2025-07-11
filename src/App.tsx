import React from 'react';
import { coursesArray } from './data/data.ts';
import { CourseCardComponent } from './components/CourseCardComponent.tsx';
import type {ICourse} from "./models/ICourse.ts";

const App: React.FC = () => {
  return (
      <div className="max-w-3xl mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Courses List</h1>
        {coursesArray.map((course:ICourse, index:number) => (
            <CourseCardComponent key={index} course={course} />
        ))}
      </div>
  );
};

export default App;
