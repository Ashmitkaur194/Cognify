"use client"
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import UserDetailContext from '@/context/UserDetailContext'

const Provider = ({children}) => {

  const {user}=useUser();
  const [userDetail,setUserDetail]=useState();

  useEffect(()=>{
    user &&CreateNewUser();
  },[user])
  const CreateNewUser=async()=>{
    try {
    const result=await axios.post('/api/user',{
      name:user?.fullName,
      email:user?.primaryEmailAddress?.emailAddress
    });
            console.log(result.data);
    } catch (error) {
        console.error('Error creating new user:', error);
    }
  }
  return (
    <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
    <div>{children}</div>
    </UserDetailContext.Provider>
  )
}

export default Provider