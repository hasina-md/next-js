import React from "react";
import {Button, Card, CardBody, Typography, CardFooter,CardHeader } from '@/ui/index'

   
  export default function CourseCard() {
    return (
      <Card className="mt-6 w-96 ">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://media.licdn.com/dms/image/D4D12AQEaTK5_cv5Fmg/article-cover_image-shrink_720_1280/0/1677082453584?e=2147483647&v=beta&t=hy4wcIl2vOpp5lr5k74obYVN63IT-U4lydNOIo3hHGo"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
    );
  }