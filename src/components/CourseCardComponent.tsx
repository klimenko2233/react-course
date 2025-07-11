import React from 'react';
import type {ICourse} from "../models/ICourse.ts";

interface Props {
    course:ICourse;
}

export const CourseCardComponent:React.FC<Props> = ({course}) => {
    return (
        <div className="border p-4 mb-4">
            <h2 className="text-xl font-bold">{course.title}</h2>
            <p> Months: {course.monthDuration}</p>
            <p> Hours: {course.hourDuration}</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
                {course.modules.map((mod, index) => (
                    <li key={index}>{mod}</li>
                ))}
            </ul>
        </div>
    );
};

