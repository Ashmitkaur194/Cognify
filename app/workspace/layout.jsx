import React from 'react'
import WorkspaceLau from './provider';
import WorkspaceProvider from './provider';

function WorkspaceLayout({children})
{
    return (
        <WorkspaceProvider>
            {children}
        </WorkspaceProvider>
    
    )
}
export default WorkspaceLayout;