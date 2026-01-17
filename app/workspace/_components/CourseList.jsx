'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import AddNewCourseDialog from './AddNewCourseDialog'

const CourseList = () => {
    const [courseList, setCourseList] = useState([]);
  return (
    <div>
        <h2 className='font-bold text-3xl mt-7'>Course List</h2> 
        {courseList?.length === 0 ? (
          <div className='flex p-7 items-center justify-center flex-col border rounded-xl mt-2 bg-secondary'>
            <Image src={'/online-education.png'} alt='edu' width={80} height={80} />
            <h2 className='my-2 text-lg font-bold'>Look like you haven't created any course yet</h2>

            <AddNewCourseDialog>
              <Button>+Create Your first course</Button>
            </AddNewCourseDialog>
          
            <div>
              List of courses
            </div>
          </div>
        ) : (
          <div>
            {/* Course list items will be rendered here */}
          </div>
        )}
    </div>
  )
}

export default CourseList;