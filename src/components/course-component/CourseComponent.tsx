import './CourseComponent.css';
import type {FC} from "react";
import type {CourseModel} from "../../models/CourseModel.ts";
type PropsType = {
    course:CourseModel;
}
export const CourseComponent:FC<PropsType>=({course})=>{
    return (
        <li>
            {course.title} - {course.monthDuration} month
        </li>
    );
};