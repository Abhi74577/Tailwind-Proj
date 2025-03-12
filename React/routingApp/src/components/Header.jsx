import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className="w-full bg-[#b1ed86]" >
            <div className='w-[1080px]  flex relative mx-auto justify-between p-5 items-center'>
                <h2 className='text-[#0a3e79] text-3xl font-extrabold leading-10'>Logo</h2>
                <ul className='flex space-x-10 items-center'>
                    {/* <li><a href="/" className='text-[20px] text-black font-bold hover:text-blue-900 cursor-pointer transition-all duration-75'>Home</a></li>
                    <li><a href="/about" className='text-[20px] font-bold hover:text-blue-900 cursor-pointer transition-all duration-75'>About</a></li>
                    <li><a href="/service" className='text-[20px] font-bold hover:text-blue-900 cursor-pointer transition-all duration-75'>Service</a></li>
                    <li><a href="/contact" className='text-[20px] font-bold hover:text-blue-900 cursor-pointer transition-all duration-75'>Contact</a></li> */}
                    <li>
                        <NavLink to="/"
                            className={
                                ({ isActive }) => isActive ? `border py-3 px-5 bg-amber-700 text-white` : 
                                    `text-[20px] text-black font-bold hover:text-blue-900 cursor-pointer transition-all duration-75`}>Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/about"
                            className={
                                ({ isActive }) => isActive ? `border py-3 px-5 bg-amber-700 text-white` : 
                                    `text-[20px] text-black font-bold hover:text-blue-900 cursor-pointer transition-all duration-75`}>About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/service"
                            className={
                                ({ isActive }) => isActive ? `border py-3 px-5 bg-amber-700 text-white` : 
                                    `text-[20px] text-black font-bold hover:text-blue-900 cursor-pointer transition-all duration-75`}>Service
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"
                            className={
                                ({ isActive }) => isActive ? `border py-3 px-5 bg-amber-700 text-white` : 
                                    `text-[20px] text-black font-bold hover:text-blue-900 cursor-pointer transition-all duration-75`}>Contact
                        </NavLink>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Header