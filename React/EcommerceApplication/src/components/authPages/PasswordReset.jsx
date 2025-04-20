import React from 'react'
import { staticImages } from '../../utils/images'
import { NavLink } from 'react-router'
function PasswordReset() {
    return (
        <div className='sm:w-full w-full md:w-[600px] lg:w-[1050px]  m-auto p-12 relative'>
            <div className='lg:flex sm:flex-col md:flex-col lg:flex-row lg:justify-start relative ' style={{ "boxShadow": "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }}>
                <img src={staticImages.bigzone1} className=' w-full  lg:w-full sm:h-[400px] md:h-[400px]  lg:h-[420px] object-center overflow-hidden '
                    style={{ "boxShadow": "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px" }}></img>

                <div className='sm:w-full md:w-full flex relative flex-col space-y-3 
                lg:justify-start items-start p-10 text-[14px] md:text-[15px] lg:text-[15px] text-[#474646]'>
                    <h2 className='text-[14px] md:text-[15px] lg:text-[22px] text-[#343333] font-extrabold'>Reset Your Password</h2>

                    <p className='text-[14px] md:text-[15px] lg:text-[16px]'>Enter your email and we will send you a link to reset your password.</p>
                    <span className='text-[14px] md:text-[15px] lg:text-[16px]'>Please check It.</span>
                    <div className='w-full flex relative flex-col space-y-1 mt-5' >
                        <label className='text-[13px] md:text-[15px] lg:text-[15px] text-[#4f4c4c] font-semibold '>Email</label>
                        <input type='text' name='name-emailaddress' placeholder='Email address' className='py-[8px] px-[10px] '
                            style={{ "boxShadow": "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" }}
                        />
                    </div>
                    <button className='w-full text-[#fff] bg-black px-6 py-[5px] mt-5 cursor-pointer'>Send</button>
                    <span className='text-[13px] text-[#464444d3] font-medium' ><NavLink to="/sign_in" end>
                        Back to Login 
                    </NavLink></span>
                </div>

            </div>


        </div>


    )
}

export default PasswordReset
