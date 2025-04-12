import React, { useState } from 'react'
import { IoLogoBuffer } from "react-icons/io5";
import { BiLogoFlutter } from "react-icons/bi";
import { BiMenuAltLeft } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { NavLink, Link } from "react-router";
function Header() {
    const [isToggle, setToggle] = useState(false)
    return (
        <>
            <header className='w-full bg-[#000000f1] relative fixed z-101' style={{
                "boxShadow": "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
            }}>
                <div className='lg:max-w-[1080px] max-w-[900px] top-0  flex justify-between mx-auto items-center px-[25px] lg:px-[12px] py-[15px]'>
                    <div className='text-white flex items-center space-x-1.5 text-[22px] font-bold'>
                        <IoLogoBuffer className='hidden sm:block lg:block' />
                        <BiLogoFlutter className='block sm:hidden lg:hidden' />
                        <h2>
                            Bolg.
                        </h2>
                    </div>
                    <nav className={
                        `hidden sm:block lg:block`}>
                        <ul className='text-[#fffffff0] flex items-center space-x-6 font-sans text-[18px]'>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "py-1 px-3 border-[#5b28ddf5] bg-[#0a37e8] rounded-md text-center" : ``
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/blog"
                                className={({ isActive }) =>
                                    isActive ? "py-2 px-3 bg-[#0a37e8]  border-[#5b28ddf5] rounded-md text-center" : ""
                                }
                            >
                                Blog
                            </NavLink>
                            <NavLink
                                to="/newblog"
                                className={({ isActive }) =>
                                    isActive ? `py-2 px-3 bg-[#0a37e8]  border-[#5b28ddf5] rounded-md text-center` : ``
                                }
                            >
                                Create
                            </NavLink>
                            {/* <li>Create</li> */}
                        </ul>

                    </nav>

                    <div className='text-[#fffffff0] items-center space-x-4 font-semibold text-[18px] '>
                        <button className='hidden sm:block lg:block py-2 px-3 border rounded-md bg-[#1036cd] hover:bg-[#424c77ac] cursor-pointer' type='button'>
                            Login
                        </button>
                        {
                            isToggle ? <BiX className=' text-[#ffffff] block sm:hidden lg:hidden text-[40px] cursor-pointer' onClick={() => setToggle(!isToggle)} />
                                :
                                <BiMenuAltLeft className=' text-[#ffffff] block sm:hidden lg:hidden text-[40px] cursor-pointer' onClick={() => setToggle(!isToggle)} />
                        }

                    </div>
                </div>
            </header>

            {
                isToggle == true && <div className='w-full h-full flex flex-col text-center space-y-5 relative bg-[#532bb9bc] mx-auto p-6 transform-3d duration-100'>
                    <nav className='relative'>
                        <ul className='max-w-[1080px] text-[#fffffff0] flex flex-col  justify-start text-center  space-y-4 font-sans text-[18px] font-semibold'>
                            <NavLink to="/" onClick={() => setToggle(false)} >Home</NavLink>
                            <NavLink to="/blog" onClick={() => setToggle(false)}  >Blog</NavLink>
                            <NavLink to="/newblog" onClick={() => setToggle(false)} >Create</NavLink>
                            {/* <li>About</li> */}
                        </ul>

                    </nav>
                    <div className='w-full h-[3px] bottom-0 bg-[#c2afd0]'></div>
                    <div className='flex justify-center text-[#fffffff0] items-center space-x-4 font-semibold text-[18px] '>
                        <button className='py-2 px-3 border-[#5b28ddf5] rounded-md bg-[#0a37e8] cursor-pointer' type='button'>
                            Log In
                        </button>
                        <button className='py-2 px-3 border-[#5b28ddf5] rounded-md bg-[#0a37e8] cursor-pointer' type='button'>
                            Sign Up
                        </button>
                    </div>
                </div>
            }
        </>
    )
}

export default Header
