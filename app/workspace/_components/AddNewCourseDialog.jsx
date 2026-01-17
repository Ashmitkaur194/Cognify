import React from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from "@/components/ui/switch"
import { Button } from '@/components/ui/button'
import { Sparkle } from 'lucide-react';


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const AddNewCourseDialog = ({children}) => {

    const onHandleInputChange=(field,value)=>{
        setFormData(prev=>({
            ...prev,
            [field]:value
        }));
        console.log(formData);
    }
  return (
    
    <Dialog>
  <DialogTrigger asChild>{children}</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New Course Using AI</DialogTitle>
      <DialogDescription asChild>
        <div className='flex flex-col gap-3 mt-3'>
          <div>
            <label>Course Name</label>
            <Input placeholder="Course Name" 
            onChange={(event)=>onHandleInputChange('courseName',event?.target.value)}></Input>
          </div>
          
          <div>
            <label>Course Description(Optional)</label>
            <Input placeholder="Course Description"></Input>
            onChange={(event)=>onHandleInputChange('courseName',event?.target.value)}
          </div>

         <div>
            <label>Number of Chapters</label>
            <Input placeholder="No of Chapters" type="number"></Input>
          </div>
          <div className='flex gap-3 item-center'>
            <label>Include Video</label>
            <Switch />
          </div>
          <div>
            <label>Difficulty Level</label>
             <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Difficulty Level" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Level</SelectLabel>
          <SelectItem value="beginner">Beginner</SelectItem>
          <SelectItem value="moderate">Moderate</SelectItem>
          <SelectItem value="advanced">Advanced</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
            </div>

            <div>
            <label>Category</label>
            <Input placeholder="Category (Seperated By Comma)"></Input>
          </div>

          <div className='mt-3'>
            <Button className={'w-full'}> <Sparkle/>Generate Course</Button>
          </div>
        


          <p>kaeuiiiiii</p>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default AddNewCourseDialog