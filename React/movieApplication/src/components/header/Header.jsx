import React, { useState } from 'react'
import './Header.css'
import { NavLink } from "react-router";
// import logo from "../../../images/home1.jpg";
function Header() {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <header>
                <div className='w-[90%] mx-auto'>
                    <nav className='max-w-full flex justify-between items-center px-4 py-4'>
                        <div className='logo'>
                            <img src='/images/logo.png' className='w-[180px] object-cover' alt='Logo' />
                        </div>
                        <ul className={toggle ? `flex flex-col space-y-10 px-8 py-10 absolute top-0 left-0 bg-[#e50813] w-[50%] h-[100vh] transform-0 duration-100 justify-start`
                            : `space-x-6 lg:block hidden`}>
                            <button className='top-4 right-5 lg:hidden  items-end absolute hover:cursor-pointer' onClick={() => setToggle(!toggle)}>
                                <i className='fa fa-xmark text-white font-extrabold text-[30px]'></i>
                            </button>
                            <NavLink className="text-white font-bold text-[18px]" to="/" end>
                                Home
                            </NavLink>
                            <NavLink className="text-white font-bold text-[18px]" to="/series" end>
                                Series
                            </NavLink>
                            <NavLink className="text-white font-bold text-[18px]" to="/movies">Movies</NavLink>
                            <NavLink className="text-white font-bold text-[18px]" to="/pages">Pages</NavLink>
                            <NavLink className="text-white font-bold text-[18px]" to="/pricing">Pricing</NavLink>
                        </ul>
                        <button className=' block lg:hidden' onClick={() => setToggle(!toggle)}>
                            <i className='fa fa-bars text-white font-extrabold text-[20px]'></i>
                        </button>
                        <div className='flex space-x-6 justify-end items-center hidden lg:block'>
                            <i className='fa fa-search text-white font-bold text-[18px]'></i>
                            <i className='fa fa-bell text-white font-bold text-[18px]'></i>
                            <i className='fa fa-user text-white font-bold text-[18px]'></i>
                            <button className='border rounded-md py-2 px-4 text-white bg-red-700 font-bold text-[18px] hover:cursor-pointer'>
                                Subscribe Now
                            </button>
                        </div>

                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
