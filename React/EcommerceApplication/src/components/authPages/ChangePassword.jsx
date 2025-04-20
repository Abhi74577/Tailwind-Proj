import { FaEyeSlash } from "react-icons/fa";
function ChangePassword() {
    return (
        <div className='w-10/12 md:w-[600px] lg:w-[600px] m-auto flex flex-col space-y-8 relative p-10 my-10' style={{ "boxShadow": "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }}>
            <h2 className='text-[18px] md:text-[23px] lg:text-[25px] text-[#343333] font-extrabold'>Create New Password</h2>

            <p className='text-[14px] md:text-[15px] lg:text-[16px] -mt-5'>Enter your email and we will send you a link to reset your password.</p>
            <div className='flex relative flex-col space-y-1'>
                <div className='flex items-center justify-between'><label className='font-sans'>Password</label>
                    <div className='flex items-center space-x-1.5 text-[14px]'><FaEyeSlash className='right-1' />
                        <label className='hidden lg:block'>Show</label></div></div>

                <input type='password' name='password' className='py-[8px] px-[10px]' placeholder='Enter Password'
                    style={{ "borderRadius": "5px", "boxShadow": "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" }}
                />

            </div>
            <div className='flex relative flex-col space-y-1'>
                <div className='flex items-center justify-between'><label className='font-sans'>Confirm Password</label>
                    <div className='flex items-center space-x-1.5 text-[14px]'><FaEyeSlash className='right-1' />
                        <label className='hidden lg:block'>Show</label></div></div>

                <input type='password' name='password' className='py-[8px] px-[10px]' placeholder='Enter Confirm Password'
                    style={{ "borderRadius": "5px", "boxShadow": "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" }}
                />


            </div>
            <button className='text-[#fff] bg-black w-full text-[16px] px-6 py-[5px] cursor-pointer'>Reset Password</button>
        </div>
    )
}

export default ChangePassword
