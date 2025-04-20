import { NavLink } from "react-router"
import { footerData, socialLinksData } from "../../data/data"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { staticImages } from "../../utils/images";
function Footer() {
  return (
    <div className="w-full bg-[#1d1c1cec] overflow-hidden">
      <div className="overflow-hidden m-auto grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative md:p-8 p-10 
           lg:px-20 lg:gap-2 font-light text-[#f7f1f1f6] md:text-[14px] lg:text-[14px] text-[15px]">
        {
          footerData?.map((item, index) => (

            <div className="w-full">
              {index > 0 && <div className="w-full bg-[rgba(86,82,82,0.87)] h-0.5 mt-2 mb-3 lg:hidden md:hidden sm:block"></div>}
              <ul className="flex flex-col space-y-2 justify-start text-center  lg:text-start" key={item.id}>
                <h2 className="font-extrabold mb-2 sm:mt-5 mt-2 text-center lg:text-start">{item.title}</h2>
                {item.links?.map((itmeLink, idx) => (
                  <li key={idx} className="mb-1 ">
                    <NavLink to={itmeLink.url} end>{itmeLink.text}</NavLink>
                  </li>
                ))

                }
                {item.lists?.map((itmelist, idx) => (
                  <li key={idx} className="mb-1 ">
                    <NavLink to={itmelist.url} end>{itmelist.text}</NavLink>
                  </li>
                ))

                }
              </ul>
            </div>

          ))

        }
      </div>

      <div className="max-w-full mx-auto md:flex sm:flex-col lg:flex relative lg:justify-between items-center  space-y-2.5 mt-2">
        <div className="space-x-2.5  flex relative justify-center items-center px-20">
          <a href="https://www.facbook.com" target="_blank" className='text-[24px] text-[#fff]'>
            <FaFacebookSquare />
            </a>
            <a href="https://www.instagram.com" target="_blank" className='text-[24px] text-[#fff]'>
         
            <FaInstagramSquare />
            </a>
            <a href="https://www.linkedin.com" target="_blank" className='text-[24px] text-[#fff]'>
            <FaLinkedin />
            </a>
        </div>
        <div className="text-[15px]  flex-col  space-y-2.5 font-bold text-[#fff] max-w-[400px] mx-auto  space-x-2.5  flex relative justify-center items-center ">
          <span>Donwload the App</span>
          <div className="flex relative space-x-2.5">
          <img className='w-[100px]' src={staticImages.google_play} />
          <img className='w-[100px]' src={staticImages.app_store} />
          </div>
          
        </div>
      </div>
      <div className="max-w-10/11 mx-auto bg-[rgba(86,82,82,0.87)] h-0.5 mt-5 mb-3 px-10"></div>
        <h2 className="font-semibold text-[#f3eeeee0] md:text-[14px] lg:text-[14px] text-[13px] text-center mb-2">
          Copyright © 2025 Achats site. All rights reserved
        </h2>
    </div>
  )
}

export default Footer
