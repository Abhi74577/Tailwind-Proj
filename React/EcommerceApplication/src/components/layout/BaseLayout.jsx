import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router'

function BaseLayout() {
    return (
        <div>
            <Header />
            <Sidebar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default BaseLayout
