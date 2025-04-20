import img1 from '../../assets/images/form_img1.png'
import google from '../../assets/icons/google.svg'
import twitter from '../../assets/icons/twitter.svg'
import { FaEyeSlash } from "react-icons/fa";
import { Link, NavLink } from 'react-router';

function SignIn() {
  return (
    <div className='sm:w-full w-full md:w-[600px] lg:w-[1050px]  m-auto p-12 relative'>
      <div className='lg:flex sm:flex-col md:flex-col lg:flex-row lg:justify-start relative ' style={{ "boxShadow": "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }}>
        <img src={img1} className=' w-full  lg:w-full sm:h-[400px] md:h-[500px]  lg:h-[560px] object-center overflow-hidden '
          style={{ "boxShadow": "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px" }}></img>

        <div className='sm:w-full md:w-full flex relative flex-col space-y-4 lg:justify-start items-start p-10 text-[10px] md:text-[14px] lg:text-[15px] text-[#474646]'>
          <h2 className='text-[18px] text-[#343333] font-extrabold'>Sign In</h2>
          <span className='w-full lg:w-[400px] flex flex-col md:flex-row lg:flex-row relative space-x-2.5 py-[10px] px-10 items-center justify-center ' style={{
            "boxShadow": "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
          }}>
            <img src={google}></img>
            <label className=' font-semibold hidden md:block lg:block'>Continue With Google</label>
            <label className=' font-semibold block md:hidden lg:hidden mt-1'>Google</label>
          </span>
          <span className='w-full lg:w-[400px] flex flex-col md:flex-row lg:flex-row relative space-x-2.5 py-[10px] px-10 items-center justify-center ' style={{
            "boxShadow": "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
          }}>
            <img src={twitter}></img>
            <label className=' font-semibold hidden md:block lg:block'>Continue With Twitter</label>
            <label className=' font-semibold block md:hidden lg:hidden mt-1'>Twitter</label>
          </span>

          <div className='w-full lg:w-[400px] flex relative  space-x-1 justify-center items-center mt-3'>
            <div className='bg-[#625f5f83] w-[200px] h-[1px]' style={{ "boxShadow": "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px" }}></div>
            <span className='border-1 rounded-full bg-[#9e0db7] text-[#fff] p-[5px] text-[14px] '>OR</span>
            <div className='bg-[#625f5f83] w-[200px] h-[1px]' style={{ "boxShadow": "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px" }}></div>
          </div>

          <div className='w-full lg:w-[400px] text-[13px] text-[#464444d3] font-medium mt-3 flex-col space-y-6'>
            <div className='flex relative flex-col space-y-1' >
              <label className='font-sans'>User name or email address</label>
              <input type='text' name='name-emailaddress' placeholder='Enter Username / Email address' className='py-[8px] px-[10px] '
                style={{ "borderRadius": "5px", "boxShadow": "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" }}
              />
            </div>

            <div className='flex relative flex-col space-y-1'>
              <div className='flex items-center justify-between'><label className='font-sans'>Password</label>
              <div className='flex items-center space-x-1.5 text-[14px]'><FaEyeSlash className='right-1' />
              <label className='hidden lg:block'>Show</label></div></div>

              <input type='password' name='password' className='py-[8px] px-[10px]' placeholder='Enter Password'
                style={{ "borderRadius": "5px", "boxShadow": "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" }}
              />
              <NavLink to="/password_reset" end className='text-end'>
                Forgot your password ?
              </NavLink>

            </div>
          </div>
          <button className='text-[#fff] bg-black w-full lg:w-[400px] px-6 py-[5px] cursor-pointer'>Sign In</button>
          <span className='text-[13px] text-[#464444d3] font-medium -mt-2'>Don't have an account? <NavLink to="/sign_up" end>
            Sign_up
          </NavLink></span>
        </div>

      </div>


    </div>

  )
}

export default SignIn
