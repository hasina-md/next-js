import React from 'react';
import CourseCard from './CourseCard';

export default function CourseList() {
    return <div className="grid grid-col-4 gap-2 p-6">
     <CourseCard/>
     <CourseCard src="https://cdn.mos.cms.futurecdn.net/Vp9WvV7YKdH4k8sKRePcE8.jpg" alt="card-image"/>
     <CourseCard/>
     <CourseCard/>
    </div>
}