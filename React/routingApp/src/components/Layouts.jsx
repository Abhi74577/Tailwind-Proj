import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layouts() {
    return (
        <div className='w-full'>
            <Header />
            <div className='w-full h-[100%] flex justify-center items-center p-[50px]'>
                
            <Outlet />
            </div>
            
        </div>
    )
}

export default Layouts