import React from 'react'
import { NavLink } from 'react-router'

function header() {
  return (
     <div className="w-full bg-[#272424f5]" >
                <div className='flex relative justify-between p-5 '>
                    <h2 className='text-white text-3xl font-extrabold leading-10'>Logo</h2>
                    <ul className='flex space-x-10 pr-3 items-center'>
                        {/* <li><a href="/" className='text-[20px] text-black font-bold hover:text-blue-900 cursor-pointer transition-all duration-75'>Home</a></li>
                        <li><a href="/about" className='text-[20px] font-bold hover:text-blue-900 cursor-pointer transition-all duration-75'>About</a></li>
                        <li><a href="/service" className='text-[20px] font-bold hover:text-blue-900 cursor-pointer transition-all duration-75'>Service</a></li>
                        <li><a href="/contact" className='text-[20px] font-bold hover:text-blue-900 cursor-pointer transition-all duration-75'>Contact</a></li> */}
                        <li>
                            <NavLink to="/"
                                className={
                                    ({ isActive }) => isActive ? `border border-black  py-3 px-5 bg-amber-700 text-white font-bold text-[16px]` : 
                                        `text-[20px] text-white font-bold hover:text-white cursor-pointer transition-all duration-75`}>Home
                            </NavLink>
                        </li>
    
                        <li>
                            <NavLink to="/paste"
                                className={
                                    ({ isActive }) => isActive ? `border border-black py-3 px-5 bg-amber-700 text-white font-bold text-[16px]` : 
                                        `text-[20px] text-white font-bold hover:text-white cursor-pointer transition-all duration-75`}>Create Paste
                            </NavLink>
                        </li>
                       
    
                    </ul>
                </div>
            </div>
  )
}

export default header
