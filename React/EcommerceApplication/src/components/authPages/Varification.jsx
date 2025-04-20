import React from 'react'

function Varification() {
  return (
    <div>
       <div className='w-10/12 md:w-[600px] lg:w-[600px] m-auto flex flex-col space-y-3 relative p-10 my-10' style={{ "boxShadow": "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }}>
            <h2 className='text-[18px] md:text-[23px] lg:text-[25px] text-[#343333] font-extrabold'>Verification</h2>

            {/* <p className='text-[14px] md:text-[15px] lg:text-[16px] '>Please check your email index and click on the provided link to reset your password. If you don't recive email.</p> */}
            <span className='text-[14px] md:text-[15px] lg:text-[16px]'>Verify your code</span>
            <div className='flex relative flex-col space-y-1 mt-4' >
                <label className='font-sans'>Verification Code</label>
                <input type='text' name='name-emailaddress' placeholder='Enter Code' className='py-[8px] px-[10px] '
                    style={{ "borderRadius": "5px", "boxShadow": "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" }}
                />
            </div>
            <button className='text-[#fff] bg-black w-full text-[16px] px-6 py-[5px] mt-3 rounded-md cursor-pointer'>Verify</button>
           
        </div>
    </div>
  )
}

export default Varification
