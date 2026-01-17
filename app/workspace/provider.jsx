import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

export default function WorkspaceProvider({children}) {
    return (
        
            <SidebarProvider>
                <SidebarTrigger/>
                <div>
                    {children}
                </div>
            </SidebarProvider>


       
            {children}
        
    )
}
