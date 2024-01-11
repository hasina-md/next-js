import { PrismaClient } from "@prisma/client";
import { Button } from '@/ui/index'
import CourseCard from "@/ui/courses/CourseCard";
import CourseList from "@/ui/courses/CourseList";


export async function getData () {
    const db = new PrismaClient();
    const data = await db.course.findMany({});
    return {
        courses: data
    }
}

export default async function Home () {
    const courseList = await getData();
    return (
        <section>
            <h2> Welcome to Next-Js with courses as it is included with prisma</h2>  
            <CourseList/>
            <CourseCard className="p-6 gap-4" />
            <Button variant="filled">Click Me</Button>
        </section>
    )
}