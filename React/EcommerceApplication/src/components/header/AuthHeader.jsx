import logo from '../../assets/images/shoppingcart1.png'
import { AiFillOpenAI } from "react-icons/ai";
import { AiFillShopping } from "react-icons/ai";
import { NavLink } from 'react-router';
function AuthHeader() {
  return (
    <div className='w-full relative bg-[#ffffff] lg:px-3 md:px-3 '
      style={{ "boxShadow": "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }}>
      <div className='max-w-[1250px] m-auto flex p-4 relative justify-between items-center space-x-2'>
        <div className='flex relative items-center space-x-1.5'>
          <img src={logo} className='w-[30px] h-[25px] object-center'></img>
          {/* <AiFillShopping className='text-[#12fae7] text-[25px]'/> */}
          <h2 className='text-[20px] font-extrabold hidden lg:block md:block'>achats.</h2>

        </div>
        <div className='flex relative items-center space-x-2.5'>
         <NavLink to="/sign_in" end>
         <button className='px-4 lg:px-6 py-[6px] bg-[#17c7b2] border-1 border-[#17c7b2] rounded-md
           text-[#ffffff] font-extrabold lg:text-[14px] text-[13px] text-center cursor-pointer' >     LogIn
                      </button>  </NavLink>
       <NavLink to="/sign_up" end>
       <button className='px-4 lg:px-6 py-[6px] border-1 border-[#1f2020] 
            rounded-md text-[#242424] font-semibold lg:text-[14px] text-[13px] text-center cursor-pointer' > SignUp
          </button></NavLink>
        </div>
      </div>
    </div>
  )
}

export default AuthHeader
