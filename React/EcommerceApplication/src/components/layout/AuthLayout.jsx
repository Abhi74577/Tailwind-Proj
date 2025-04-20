import React from 'react'
import AuthHeader from '../header/AuthHeader'
import { Outlet } from 'react-router'
import Footer from '../footer/Footer'

function AuthLayout() {
    return (
        <div>
            <AuthHeader />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default AuthLayout
