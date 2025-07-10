import {coursesAndDurationArray} from "../../arrays.ts";
import type {CourseModel} from "../../models/CourseModel.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";
import './CoursesComponent.css';

export const CoursesComponent = () => {
    return (
        <ul>
            {
                coursesAndDurationArray.map((course:CourseModel,index:number) => {
                    return <CourseComponent course={course} key={index}/>;
            })
            }
        </ul>
    );
};
