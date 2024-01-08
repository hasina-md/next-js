import { PrismaClient } from "@prisma/client";


export async function getData () {
    const db = new PrismaClient();
    const data = await db.course.findMany({});
    return {
        courses: data
    }
}

export default async function Home () {
    const courseLit = await getData();
    return (
        <main>
            <h2> Welcome to Next-Js with courses as it is included with prisma</h2>
            <pre>{JSON.stringify(courseLit, null, 2)}</pre>
           
        </main>
    )
}