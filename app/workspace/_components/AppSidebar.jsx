import React from 'react'


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import { Book, Compass, LayoutDashboard, UserCircle2Icon, WalletCards } from 'lucide-react'



const SideBarOptions=[
    {
        title:'Dashboard',
        icon:LayoutDashboard,
        path:'/#'
    },
        {
        title:'MyLeraning',
        icon:Book,
        path:'/workspace/my-courses'
    },
        {
        title:'Explore Courses',
        icon:Compass,
        path:'/workspace/explore'
    },
        {
        title:'Billing',
        icon:WalletCards,
        path:'/workspace/billing'
    },
        {
        title:'Profile',
        icon:UserCircle2Icon,
        path:'/workspace/profile'
    },
   
    
]
const AppSidebar = () => {
  return (
     <Sidebar>
      <SidebarHeader className={'p-4'} >
        <Image src={'/logo.svg'} alt='logo' width={50} height={50} /></SidebarHeader>
        
      
      <SidebarContent>
        <SidebarGroup>
          <Button>Create New Course</Button>
          <SidebarGroupContent>
            <SidebarMenu>
              {SideBarOptions.map((item, index) => (
                item.path && (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton asChild>
                      <Link href={item.path}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar