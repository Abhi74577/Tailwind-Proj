
import './App.css';
import React from 'react'
import logo from './assets/images/razorpay-icon.svg'
import logo_SS from './assets/images/LogoSS.png'
import indiaFlg from './assets/images/flg.png'
import herosectionImg from './assets/images/Heroserctionimg.jpg'
import triangleImg from './assets/images/spaceTrianglediv.png'
import dotedImg from './assets/images/dotfetureimg.png'
import rightFeatureImg from './assets/images/payment-suite-my.670928b6.png'
import featureImgSVg from './assets/images/features-bg.61935438.svg'
import merchants from './assets/images/merchants-my.13362bb6.png'
import payment1 from './assets/images/paymentlink.jpg'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { CgCheck } from "react-icons/cg";
import footersignup from './assets/images/footer-signup.6bf7413f.svg'
import { CgArrowRight } from "react-icons/cg";
import { CgArrowLongRight } from "react-icons/cg";
function App() {
  const featureImgSVG = "./assets/images/features-bg.61935438.svg";

  return (
    <>

      <nav className="bg-[#09022b] w-full">
        <div className='relative md:w-11/12 max-w-[1080px] mx-auto flex justify-between items-center py-4'>

          {/* -- Logo -- */}

          <a className='no-underline' href="#"> <h2 className='text-white text-center font-bold text-2xl italic'>Razorpay</h2></a>


          {/* <img className='bg-blue-950 text-white w-[100px] h-[50px]' src={logo_SS} alt="Logo" loading='lazy' /> */}


          {/* --Menu-- */}
          <ul className='flex justify-between space-x-6'>
            <li className='text-white font-semibold text-center py-5 font-stretch-expanded hover:text-blue-400 cursor-pointer
             transform duration-75 relative group hidden lg:block'>
              <a className='no-underline' href="#">Payments</a>
              <div className='absolute w-full bottom-0 h-1 hidden group-hover:block bg-blue-400 transform duration-75'></div>
            </li>

            <li className='text-white font-semibold text-center py-5 font-stretch-expanded hover:text-blue-400 cursor-pointer
             transform duration-75 relative group hidden lg:block'>
              <a className='no-underline' href="#">Bank</a>
              {/* <div className='absolute w-full bottom-0 h-1 hidden group-hover:block bg-blue-400 transform duration-75'></div> */}
            </li>
            <li className='text-white font-semibold text-center py-5 font-stretch-expanded hover:text-blue-400 cursor-pointer
             transform duration-75 relative group hidden lg:block'>
              <a className='no-underline' href="#">Developer Doc</a>
              <div className='absolute w-full bottom-0 h-1 hidden group-hover:block bg-blue-400 transform duration-75'></div>
            </li>
            <li className='text-white font-semibold text-center py-5 font-stretch-expanded hover:text-blue-400 cursor-pointer
             transform duration-75 relative group hidden lg:block'>
              <a className='no-underline' href="#">Support</a>
              <div className='absolute w-full bottom-0 h-1 hidden group-hover:block bg-blue-400 transform duration-75'></div>
            </li>
            <li className='text-white font-semibold text-center py-5 font-stretch-expanded hover:text-blue-400 cursor-pointer
             transform duration-75 relative group hidden lg:block'>
              <a className='no-underline' href="#">Pricing</a>
              <div className='absolute w-full bottom-0 h-1 hidden group-hover:block bg-blue-400 transform duration-75'></div>
            </li>
            <li className='text-white font-semibold text-center py-5 font-stretch-expanded hover:text-blue-400 cursor-pointer
             transform duration-75 relative group hidden lg:block'>
              <a className='no-underline' href="#">Blog</a>
              <div className='absolute w-full bottom-0 h-1 hidden group-hover:block bg-blue-400 transform duration-75'></div>
            </li>

          </ul>
          <div className="flex space-x-3 items-center pr-4">
            <img className='w-[40px] h-[30px] object-cover object-center hidden lg:block' src={indiaFlg} alt="India" loading='lazy' />
            <button className='text-white font-bold text-center text-1xl py-2 px-5 rounded-sm border border-blue-400 hover:cursor-pointer'>Log In</button>
            <button className='text-blue-500 font-bold text-center text-1xl py-3 px-7 rounded-sm border border-blue-400 hidden lg:block bg-white hover:cursor-pointer'>Sign Up -></button>
            <svg className='block lg:hidden' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu text-white text-xs cursor-pointer lg:hidden"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </div>

        </div>
      </nav>


      {/* -----Hero Section----- */}

      <section className="bg-[#09022b] w-full">

        <div className=' max-w-[1080px] flex flex-col lg:flex-row justify-between m-auto p-5 items-center'>


          {/* left div */}
          <div className='max-w-full space-y-7'>
            <h2 className="text-white font-bold text-4xl">Power your finance, grow your business</h2>
            <div className="bottom-0 w-5 h-1 bg-blue-400"></div>
            <p className="text-[#ebe6dcd4] font-normal text-sm">Accept payments from customers. Automate payouts to vendors & Employees. Never run out of working capital.</p>
            <button className='text-white font-bold  text-center 
            text-1xl py-3 px-6 rounded-sm border border-blue-500 bg-blue-500 hover:cursor-pointer'>Get Started -></button>
          </div>


          {/* right div */}
          <img className='w-[700px] relative object-contain right-0 left-0 overflow-hidden' src={herosectionImg} alt="Hero Section" loading='lazy' />
        </div>
        {/* sapce triangle div */}
        <div className='w-[100%] overflow-hidden relative'>
          <img src={triangleImg} alt="Triangle" loading='lazy' />
        </div>
      </section>

      {/* feature section  */}
      <section className="w-full relative overflow-hidden">
        <img src={dotedImg} alt="" loading='lazy' width={233} height={167} className='absolute -top-[8rem] left-[10rem]  -z-10 hidden lg:inline-block' />
        <img src={dotedImg} alt="" loading='lazy' width={233} height={167} className='absolute top-[3rem] right-0  rotate-180 hidden lg:inline-block' />

        <div className='relative w-11/12 max-w-[1080px] mx-auto pt-7'>
          <h2 className='text-2xl font-extrabold text-center leading-1.5'>Accept Payments with Curlec</h2>
          <div className="bottom-0 w-6 h-1 bg-blue-400 mx-auto mt-8 mb-7"></div>
          {/* content box */}
          <div className='w-full min-h-[500px] bg-white flex relative border border-[#e8d7d7] rounded-md px-10 py-12'>
            {/* left cantainer */}
            <div className="flex flex-col justify-between  w-full">
              <h3 className='text-[29px] font-bold leading-10 max-w-[520px]'>Supercharge your business with the all-powerful <span className='text-blue-600'>Curlec Payment Gateway</span> </h3>

              <ul className="space-y-2">
                <li className='flex items-center space-x-3'><CgCheck className='text-2xl text-green-500' /><span className='font-normal text-[17px]'>Multiple Payment Methods</span></li>
                <li className='flex items-center space-x-3'><CgCheck className='text-2xl text-green-500' /><span className='font-normal text-[17px]'>Superior Checkout Experience</span></li>
                <li className='flex items-center space-x-3'><CgCheck className='text-2xl text-green-500' /><span className='font-normal text-[17px]'>Industry Leading Success Rate</span></li>
                <li className='flex items-center space-x-3'><CgCheck className='text-2xl text-green-500' /><span className='font-normal text-[17px]'>Easy to Integrate</span></li>
                <li className='flex items-center space-x-3'><CgCheck className='text-2xl text-green-500' /><span className='font-normal text-[17px]'>Secure and Reliable</span></li>
                <li className='flex items-center space-x-3'><CgCheck className='text-2xl text-green-500' /><span className='font-normal text-[17px]'>In-depth Reporting and Insights</span></li>
              </ul>
              {/* button container */}

              <div className='flex space-x-6 items-center'>
                <button className='w-fit text-white font-bold bg-blue-500 px-6 py-[15px] rounded-md hover:bg-blue-600 cursor-pointer transition-all duration-75 '>Get Started</button>
                <a href="#" className='text-blue-600 font-bold leading-2 hover:text-blue-800 transition-all duration-75'>Know More ></a>
              </div>
            </div>

            {/* right container */}
            <div>
              <img className='max-w-[600px] absolute right-0 bottom-0 hidden  md:max-w-[450px] lg:max-w-[600px]  md:block lg:block' src={rightFeatureImg} alt="Feature" loading='lazy' />
            </div>
          </div>

          {/* Section cards ---> */}
          <section className="w-full grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">


            {/* ---box 1 */}
            <div className="w-full min-h-[15rem] relative cursor-pointer">
              <img className='bg-blue-800 absolute right-1 top-3 w-15 h-15 rounded-full z-10 hover:bg-blue-500' src={payment1} alt="Payemntlink" srcset="" loading='lazy' />
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[100] featureCardSVG"
                style={{ strokeOpacity: 0.15 }}
              >
                <path
                  d="m 0 6
   a 6 6 0 0 1 6 -6
   h 250.32501220703125
   a 16 16 0 0 1 11 5
   l 77 77
   a 16 16 0 0 1 5 11
   v 126
   a 6 6 0 0 1 -6 6
   h -337.32501220703125
   a 6 6 0 0 1 -6 -6
   z"
                  fill="#fff"
                />
              </svg>

              {/* card container */}
              <div className="z-100 w-full h-full flex flex-col space-y-8 pl-6 py-9 pr-4 absolute">
                <h3 className='font-extrabold text-3xl lg:text-2xl leading-2'>Payment Links</h3>
                <p className='text-[#2e2c2bdd] font-normal text-[18px] lg:text-sm pr-3 lg:pr-0 leading-6 w-full  lg:w-[300px]'>Share payment links via email, SMS, WhatsApp, Telegram, chatbot etc. and get paid immediately.</p>
                <a href="#" className='text-blue-600 text-2xl lg:text-[18px] font-bold leading-2 hover:text-blue-800 transition-all duration-75'>Know More ></a>
              </div>
            </div>

            {/* ---box 2 */}
            <div className="w-full min-h-[15rem] relative cursor-pointer">
              <img className='bg-blue-800 absolute right-3 top-3 w-15 h-15 rounded-full z-8 object-center hover:bg-blue-500' src={payment1} alt="Payemntlink" srcset="" loading='lazy' />
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[100] featureCardSVG"
                style={{ strokeOpacity: 0.15 }}
              >
                <path
                  d="m 0 6
   a 6 6 0 0 1 6 -6
   h 250.32501220703125
   a 16 16 0 0 1 11 5
   l 77 77
   a 16 16 0 0 1 5 11
   v 126
   a 6 6 0 0 1 -6 6
   h -337.32501220703125
   a 6 6 0 0 1 -6 -6
   z"
                  fill="#fff"
                />
              </svg>

              {/* card container */}
              <div className="z-100 w-full h-full flex flex-col space-y-8 pl-6 py-9 pr-4 absolute">
                <h3 className='font-extrabold text-3xl lg:text-2xl leading-2'>Payment Links</h3>
                <p className='text-[#2e2c2bdd] font-normal text-[18px] lg:text-sm pr-3 lg:pr-0 leading-6 w-full  lg:w-[300px]'>Share payment links via email, SMS, WhatsApp, Telegram, chatbot etc. and get paid immediately.</p>
                <a href="#" className='text-blue-600 text-2xl lg:text-[18px] font-bold leading-2 hover:text-blue-800 transition-all duration-75'>Know More ></a>
              </div>
            </div>

            {/* ---box 3 */}
            <div className="w-full min-h-[15rem] relative cursor-pointer">
              <img className='bg-blue-800 absolute right-3 top-3 w-15 h-15 rounded-full z-8 object-center hover:bg-blue-500' src={payment1} alt="Payemntlink" srcset="" loading='lazy' />
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[100] featureCardSVG"
                style={{ strokeOpacity: 0.15 }}
              >
                <path
                  d="m 0 6
   a 6 6 0 0 1 6 -6
   h 250.32501220703125
   a 16 16 0 0 1 11 5
   l 77 77
   a 16 16 0 0 1 5 11
   v 126
   a 6 6 0 0 1 -6 6
   h -337.32501220703125
   a 6 6 0 0 1 -6 -6
   z"
                  fill="#fff"
                />
              </svg>

              {/* card container */}
              <div className="z-100 w-full h-full flex flex-col space-y-8 pl-6 py-9 pr-4 absolute">
                <h3 className='font-extrabold text-3xl lg:text-2xl leading-2'>Payment Links</h3>
                <p className='text-[#2e2c2bdd] font-normal text-[18px] lg:text-sm pr-3 lg:pr-0 leading-6 w-full  lg:w-[300px]'>Share payment links via email, SMS, WhatsApp, Telegram, chatbot etc. and get paid immediately.</p>
                <a href="#" className='text-blue-600 text-2xl lg:text-[18px] font-bold leading-2 hover:text-blue-800 transition-all duration-75'>Know More ></a>
              </div>
            </div>

            {/* ---box 4 */}
            <div className="w-full min-h-[15rem] relative cursor-pointer">
              <img className='bg-blue-800 absolute right-3 top-3 w-15 h-15 rounded-full z-8 object-center hover:bg-blue-500' src="https://curlec.com/build/browser/static/payment-pages.eadf7c84.svg" alt="Payemntlink" srcset="" loading='lazy' />
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[100] featureCardSVG"
                style={{ strokeOpacity: 0.15 }}
              >
                <path
                  d="m 0 6
   a 6 6 0 0 1 6 -6
   h 250.32501220703125
   a 16 16 0 0 1 11 5
   l 77 77
   a 16 16 0 0 1 5 11
   v 126
   a 6 6 0 0 1 -6 6
   h -337.32501220703125
   a 6 6 0 0 1 -6 -6
   z"
                  fill="#fff"
                />
              </svg>

              {/* card container */}
              <div className="z-100 w-full h-full flex flex-col space-y-8 pl-6 py-9 pr-4 absolute">
                <h3 className='font-extrabold text-3xl lg:text-2xl leading-2'>Payment Links</h3>
                <p className='text-[#2e2c2bdd] font-normal text-[18px] lg:text-sm pr-3 lg:pr-0 leading-6 w-full  lg:w-[300px]'>Share payment links via email, SMS, WhatsApp, Telegram, chatbot etc. and get paid immediately.</p>
                <a href="#" className='text-blue-600 text-2xl lg:text-[18px] font-bold leading-2 hover:text-blue-800 transition-all duration-75'>Know More ></a>
              </div>
            </div>

            {/* ---box 5 */}
            <div className="w-full min-h-[15rem] relative cursor-pointer">
              <img className='bg-blue-800 absolute right-3 top-3 w-15 h-15 rounded-full z-8 object-center hover:bg-blue-500' src="https://curlec.com/build/browser/static/instant-activation.6f975aa6.svg" alt="Payemntlink" srcset="" loading='lazy' />
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[100] featureCardSVG"
                style={{ strokeOpacity: 0.15 }}
              >
                <path
                  d="m 0 6
   a 6 6 0 0 1 6 -6
   h 250.32501220703125
   a 16 16 0 0 1 11 5
   l 77 77
   a 16 16 0 0 1 5 11
   v 126
   a 6 6 0 0 1 -6 6
   h -337.32501220703125
   a 6 6 0 0 1 -6 -6
   z"
                  fill="#fff"
                />
              </svg>

              {/* card container */}
              <div className="z-100 w-full h-full flex flex-col space-y-8 pl-6 py-9 pr-4 absolute">
                <h3 className='font-extrabold text-3xl lg:text-2xl leading-2'>Payment Links</h3>
                <p className='text-[#2e2c2bdd] font-normal text-[18px] lg:text-sm pr-3 lg:pr-0 leading-6 w-full  lg:w-[300px]'>Share payment links via email, SMS, WhatsApp, Telegram, chatbot etc. and get paid immediately.</p>
                <a href="#" className='text-blue-600 text-2xl lg:text-[18px] font-bold leading-2 hover:text-blue-800 transition-all duration-75'>Know More ></a>
              </div>
            </div>

            {/* ---box 6 */}
            <div className="w-full min-h-[15rem] relative cursor-pointer">
              <img className='bg-blue-800 absolute right-3 top-3 w-15 h-15 rounded-full z-8 object-center  hover:bg-blue-500 ' src={payment1} alt="Payemntlink" srcset="" loading='lazy' />
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[100] featureCardSVG"
                style={{ strokeOpacity: 0.15 }}
              >
                <path
                  d="m 0 6
   a 6 6 0 0 1 6 -6
   h 250.32501220703125
   a 16 16 0 0 1 11 5
   l 77 77
   a 16 16 0 0 1 5 11
   v 126
   a 6 6 0 0 1 -6 6
   h -337.32501220703125
   a 6 6 0 0 1 -6 -6
   z"
                  fill="#fff"
                />
              </svg>

              {/* card container */}
              <div className="z-100 w-full h-full flex flex-col space-y-8 pl-6 py-9 pr-4 absolute">
                <h3 className='font-extrabold text-3xl lg:text-2xl leading-2'>Payment Links</h3>
                <p className='text-[#2e2c2bdd] font-normal text-[18px] lg:text-sm pr-3 lg:pr-0 leading-6 w-full  lg:w-[300px]'>Share payment links via email, SMS, WhatsApp, Telegram, chatbot etc. and get paid immediately.</p>
                <a href="#" className='text-blue-600 text-2xl lg:text-[18px] font-bold leading-2 hover:text-blue-800 transition-all duration-75'>Know More ></a>
              </div>
            </div>


          </section>
        </div>
      </section>

      {/* Features Section Second */}
      <section className={`w-full  bg-[url('./assets/images/features-bg.61935438.svg')] 
        relative bg-no-repeat bg-cover bg-center mt-6 md:mt-14 z-[1000]`
      } style={{ backgroundSize: "100% 100%", paddingTop: "12rem", paddingBottom: "12rem" }}
      >
        {/* <img className='w-full h-[1080px] absolute object-center left-0 right-0 pb-[8rem]' src={featureImgSVg} alt="Feature" /> */}
        {/* <section className={`w-full max-w-full relative bg-no-repeat bg-cover  pt-[11rem] pb-[200px] mt-14 text-center overflow-hidden`} */}
        {/* style={{ backgroundImage: `url(${featureImgSVG})` }}>  */}
        {/* content Container */}
        {/* <div className="w-[1400px mt-14 relative"> */}
        <div className="w-11/12 max-w-[1080px] mx-auto pt-20 lg:pt-4 relative">
          <div className="w-full flex flex-col py-10 items-center space-y-4">
            <h3 className='text-white font-extrabold text-2xl '>Features!</h3>
            <div className='w-6 h-1 bottom-0 bg-green-500  '></div>
            <p className="max-w-[450px] text-[#fffffffa] font-semibold text-center">Make no compromises when it comes to payments.
              Empower your business with the right tools to accept online payments with the best customer experience!</p></div>
          {/* --Grid Box Card container */}

          <section className='w-full grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 space-y-5 '>
            {/* box 1 */}
            <div className="w-full lg:h-[260px] flex flex-col px-4 space-y-4 items-start relative">
              <img className=' h-[45px] object-center left-0' src="https://curlec.com/build/browser/static/instant-activation.6f975aa6.svg" alt="" loading='lazy' />
              <h3 className="text-[#ffffffea] font-extrabold text-[18px] text-start">Instant Activation</h3>
              <p className='lg:max-w-[213px] text-[#ffffffea] font-semibold text-start'>Get activated within minutes. Completely online onboarding with minimum documentation</p>
            </div>
            {/* box 2 */}
            <div className="w-full lg:h-[260px] flex flex-col px-4 space-y-4 items-start relative">
              <img className=' h-[45px] object-center left-0' src="https://curlec.com/build/browser/static/easy-integration.18651e2f.svg" alt="" loading='lazy' />
              <h3 className="text-[#ffffffea] font-extrabold text-[18px] text-start">Easy Integration</h3>
              <p className='lg:max-w-[213px] text-[#ffffffea] font-semibold text-start'>With plugins for all major platforms, integrate and go live with Curlec within hours.</p>
            </div>
            {/* box 3 */}
            <div className="w-full lg:h-[260px] flex flex-col px-4 space-y-4 items-start relative">
              <img className=' h-[45px] object-center left-0' src="https://curlec.com/build/browser/static/api-driven.207572da.svg" alt="" loading='lazy' />
              <h3 className="text-[#ffffffea] font-extrabold text-[18px] text-start">API Driven</h3>
              <p className='lg:max-w-[213px] text-[#ffffffea] font-semibold text-start'>Build your business for scale with our complete API-driven automation that requires zero manual intervention.</p>
            </div>
            {/* box 4 */}
            <div className="w-full lg:h-[260px] flex flex-col px-4 space-y-4 items-start relative">
              <img className=' h-[45px] object-center left-0' src="https://curlec.com/build/browser/static/payment-modes-my.91918bf3.svg" alt="" loading='lazy' />
              <h3 className="text-[#ffffffea] font-extrabold text-[18px] text-start">Multiple Payment Methods</h3>
              <p className='lg:max-w-[213px] text-[#ffffffea] font-semibold text-start'>Offer your customers the luxury of all major payment methods including Credit/Debit cards,
                eWallets & FPX.</p>
            </div>

            {/* box 5 */}
            <div className="w-full lg:h-[260px] flex flex-col px-4 space-y-4 items-start relative">
              <img className=' h-[45px] object-center left-0' src="https://curlec.com/build/browser/static/secure-my.a2c0c900.svg" alt="" loading='lazy' />
              <h3 className="text-[#ffffffea] font-extrabold text-[18px] text-start">Secure</h3>
              <p className='lg:max-w-[213px] text-[#ffffffea] font-semibold text-start'>100% PCI DSS compliant and certified solution which removes your burden of compliance.</p>
            </div>
            {/* box 6 */}
            <div className="w-full lg:h-[260px] flex flex-col px-4 space-y-4 items-start relative">
              <img className=' h-[45px] object-center left-0' src="https://curlec.com/build/browser/static/simple-pricing-my.fb1e1394.svg" alt="" loading='lazy' />
              <h3 className="text-[#ffffffea] font-extrabold text-[18px] text-start">Simple Pricing</h3>
              <p className='lg:max-w-[213px] text-[#ffffffea] font-semibold text-start'>Our innovative payment solutions with competitive pricing make payments simpler.</p>
            </div>
            {/* box 7 */}
            <div className="w-full lg:h-[260px] flex flex-col px-4 space-y-4 items-start relative">
              <img className=' h-[45px] object-center left-0' src="https://curlec.com/build/browser/static/support-my.5c2ae2ef.svg" alt="" loading='lazy' />
              <h3 className="text-[#ffffffea] font-extrabold text-[18px] text-start">Best in Industry Support</h3>
              <p className='lg:max-w-[213px] text-[#ffffffea] font-semibold text-start'>Fast response from local team, available on email and phone based support to help you in your every step.</p>
            </div>
            {/* box 8*/}
            <div className="w-full lg:h-[260px] flex flex-col px-4 space-y-4 items-start relative">
              <img className=' h-[45px] object-center left-0' src="https://curlec.com/build/browser/static/dashboard-my.95176078.svg" alt="" loading='lazy' />
              <h3 className="text-[#ffffffea] font-extrabold text-[18px] text-start">Dashboard Reporting</h3>
              <p className='lg:max-w-[213px] text-[#ffffffea] font-semibold text-start'>Real-time data and insights from your Curlec Dashboard to make better business decisions.</p>
            </div>
          </section>

        </div>


        {/* </div> */}
      </section>


      {/* Section Enabling payments  */}

      <section className='w-full mx-auto relative overflow-hidden bg-[#f5f8fe] -mt-[200px] -z-100 pt-40 pb-12'>
        {/* book card cantainer */}
        <div className=" max-w-[1080px] w-10/12 md:w-11/12 mx-auto flex justify-center lg:justify-end flex-col space-y-5 lg:flex-row  ">
          {/* Left Container */}

          <div className="flex flex-col py-10 items-start mt-14 space-y-4">
            <h3 className='max-w-[600px] text-[#232222fa]  font-extrabold text-[1.6rem]'>Enabling payments of 8,000,000+ businesses powered by Razorpay Group</h3>
            <div className='w-6 h-1 bottom-0 bg-green-500'></div>
            <p className="max-w-[600px] text-[#3c3333fa] font-semibold text-start mt-3">We make it easier for you to focus on building great products while we work on simplifying your payments. Become one of us by joining thousands of our happy users.</p>
            <button className=' text-white font-bold bg-blue-600 px-7 py-[15px] rounded-md mt-3 hover:bg-blue-800 cursor-pointer transition-all duration-75 '>Get Started</button>
          </div>


          {/* Right Container */}

          <div className='w-full lg:w-[480px] h-[500px] relative overflow-y-hidden'>
            <div className='w-full h-[80px] bg-linear-180 from-[#f5f8feab] to-[#f5f8feab] top-0 absolute z-50'></div>
            <img className='absolute h-auto object-cover companyList' src={merchants} alt="merchants" loading='lazy'

            />
            <div className='w-full h-[70px] bg-linear-0 from-[#f5f8feab] to-[#f5f8feab] bottom-0 absolute z-50'></div>
          </div>
        </div>
      </section>

      {/* Section People Review */}

      <section className='w-full bg-white pt-[6rem] pb-3'>
        <div className='max-w-[1080px] mx-auto flex flex-col relative items-center'>
          <div className="w-full">
            <img width={220} height={160} className='absolute top-[2.4rem] left-[5rem] inline-block z-10' src={dotedImg} alt="" loading='lazy' />
            <h2 className='text-center font-extrabold text-2xl text-[#252222]'>An Experience <br />
              People Love to Talk About</h2>
            <div className='w-6 h-1 bottom-0 bg-green-500 mx-auto mt-4'></div>
          </div>

          {/* card cantainer main */}
          <div className="w-full flex relative justify-between mt-[102px] items-center z-100">
            {/* < left icone div> */}
            <button className='w-[80px] h-[80px] bg-[#e0d6d66e] text-center py-[1.5rem] flex justify-center items-center  rounded-full font-extrabold hover:cursor-pointer -translate-y-1 hover:scale-110 hover:bg-gray-200'>

              <div className='w-[55px] h-[55px] rounded-full  bg-[#d2c4c47c] mix-blend-multiply flex justify-center items-center'><FaAngleLeft className='text-3xl font-bold text-gray-600' style={{ fontWeight: "900px" }} /></div>

            </button>


            {/* Main Card Cantainer  */}
            <div className='w-[890px] flex relative justify-between items-center'>
              {/* left-container  */}
              <img width="350px" height="350px" className='overflow-hidden object-cover'
                src="https://media.razorpay.com/file/platform/acquisition/testimonial/jared_nateskin.PNG?w=xl&project=website-media" alt=""
                loading='lazy'
              />

              {/* right-contant */}

              <div className=" h-[350px] flex flex-col pt-[40px] pl-[20px] pr-[20px]">
                <img width={40} height={50}
                  src="https://curlec.com/build/browser/static/quotes-icon.40f48901.svg" alt="" loading='lazy' />
                <h3 className=' max-w-[400px] font-extralight text-3xl leading-12 text-black'>Boosted our FPX & eWallet transactions by 51.3%</h3>
                <a href="#" className='underline underline-offset-[1px] font-extralight italic text-black' >Learn More</a>
                <h2 className='font-extrabold text-2xl mt-[8px]'>Samuel Siew</h2>
                <h4 className='text-[17px] font-medium text-[#0f0f0f] leading-1.5 mt-3'>CEO</h4>
                <img width={150} height={40} className='relative mt-4 object-cover' src="https://curlec.com/build/browser/static/courtside.370374c5.png" loading='lazy' alt="" />
              </div>

            </div>

            {/* < Right icone div> */}
            <button className='w-[80px] h-[80px] bg-[#e0d6d66e] text-center py-[1.5rem] flex justify-center items-center  rounded-full font-extrabold hover:cursor-pointer -translate-y-1 hover:scale-110 hover:bg-gray-200'>

              <div className='w-[55px] h-[55px] rounded-full  bg-[#d2c4c47c] mix-blend-multiply flex justify-center items-center'><FaAngleRight className='text-3xl font-bold text-gray-600' style={{ fontWeight: "900px" }} /></div>

            </button>
          </div>


          <div className='w-full flex justify-center items-center  py-[80px] space-x-2'>
            <div className='bg-gray-400 rounded-full w-[10px] h-[10px]'></div>
            <div className='bg-gray-400 rounded-full w-[10px] h-[10px]'></div>
            <div className='bg-gray-400 rounded-full w-[10px] h-[10px]'></div>
            <div className='bg-gray-400 rounded-full w-[10px] h-[10px]'></div>
            <div className='bg-gray-400 rounded-full w-[10px] h-[10px]'></div>
            <div className='bg-gray-400 rounded-full w-[10px] h-[10px]'></div>
            <div className='bg-gray-400 rounded-full w-[10px] h-[10px]'></div>
            <div className='bg-gray-400 rounded-full w-[10px] h-[10px]'></div>
          </div>
        </div>
      </section>


      {/* ---second bg img Section */}
      <section className={`w-full  bg-[url('./assets/images/footer-head-bg.990e26df.svg')] 
        relative bg-no-repeat bg-cover bg-center`} style={{ backgroundSize: "100% 100%", paddingTop: "9.2rem", paddingBottom: "8rem" }}>
        <div className='max-w-[1080px] mx-auto px-6 lg:px-0 lg:justify-center flex '>
          {/* left container  */}
          <div className="w-[700px] relative flex flex-col items-start space-y-4 -top-5">
            <h1 className='text-2xl font-extrabold text-[#fff] text-center'>Supercharge Your Business With Curlec</h1>
            <div className='w-7 h-1 bottom-0 bg-green-400 '></div>
            <p className='lg:max-w-[500px] text-[#ffffffea] text-[16px] font-medium'>
              Sign up now to experience the future of payments and offer your customers the best checkout experience.</p>
            <ul className=' w-full flex flex-wrap lg:flex-row lg:space-x-3'>
              <li className='flex space-x-2 items-center'><CgCheck className='text-4xl text-green-400 ' /> <p className='text-[#fffffff7] text-[16px] font-medium text-center'>Quick onboarding</p></li>
              <li className='flex space-x-2 items-center'><CgCheck className='text-4xl text-green-400 ' /> <p className='text-[#fffffff7] text-[16px] font-medium text-center'>Access to entire product suite</p></li>
              <li className='flex space-x-2 items-center'><CgCheck className='text-4xl text-green-400 ' /> <p className='text-[#fffffff7] text-[16px] font-medium text-center'>API access</p></li>
            </ul>

            <button className='flex py-3 px-5 space-x-3 items-center bg-[#fffffff9] text-blue-500 font-bold text-[15px]  hover:text-blue-900 cursor-pointer '>
              <p className=''>Sign Up Now</p> <CgArrowRight className='' />
            </button>
          </div>

          {/* Right container  */}

          <img width={250} height={100} className='object-fill hidden lg:block ' loading='lazy' src={footersignup} alt="" srcset="" />


        </div>
      </section>

      {/* footer Section  */}

      <section className='w-full bg-[#fcfdff] '>
        <div className=' max-w-[1080px] flex flex-col px-10 lg:flex-row mx-auto justify-center lg:space-x-4 lg:px-0'>
          {/* Left Container  */}
          <div className='max-w-[400px] lg:max-w-[320px] flex flex-col relative space-y-5 py-6 px-4'>
            <img width={80} height={40} src="https://curlec.com/build/browser/static/curlec-logo-dark.57e1890e.svg" alt="" loading='lazy' />
            <p className='w-full text-[#383636cb] text-[18px]  lg:text-[14px] font-medium pr-2'>Curlec is a full-stack payments solution that makes it easy for businesses of all sizes to collect payments,
              automate payouts and take control of their cash flow.</p>
            <p className='w-full text-[#383636cb] text-[18px] lg:text-[14px] font-medium pr-2'>
              Today, Curlec is part of the Razorpay group - India’s leading Payments and Banking Platform for businesses.
              The company serves over 8 million businesses and is backed by some of the world's marquee investors that include Sequoia Capital India, Tiger Global,
              Lone Pine Capital and TCV, and was part of the prestigious Silicon Valley tech accelerator, Y Combinator.
            </p>
            <p className='text-[#484747f5]  text-1xl font-bold '>Created  by: Abhinav Tiwari</p>
          </div>

          {/* right container  */}
          <div className='w-full lg:w-[680px] grid grid-cols-1
           md:grid-cols-2 lg:grid-cols-3 py-4 gap-1'>

            {/* first box  */}
            <div className='flex flex-col space-y-3'>
              <div className='flex flex-col space-y-1'>
                <h2 className='text-[20px] font-bold text-[#2c2a2acb]'>PAYMENTS</h2>
                <ul className='flex flex-col space-y-1'>
                  <li className='text-blue-500 font-mono text-[17px] hover:text-[#2c2a2acb]'><a href="#">Payment Gateway</a></li>
                  <li className='text-blue-500 font-mono text-[17px] hover:text-[#2c2a2acb]'><a href="#">Payment Page</a></li>
                  <li className='text-blue-500 font-mono text-[17px] hover:text-[#2c2a2acb]'><a href="#">Payment Link</a></li>
                  <li className='text-blue-500 font-mono text-[17px] hover:text-[#2c2a2acb]'><a href="#">Payment Button</a></li>
                  <li className='text-blue-500 font-mono text-[17px] hover:text-[#2c2a2acb]'><a href="#">Subscription</a></li>
                  <li className='text-blue-500 font-mono text-[17px] hover:text-[#2c2a2acb]'><a href="#">Invoice</a></li>
                </ul>
              </div>
              <div className='flex flex-col space-y-3'>
                <h2 className='text-[20px] font-bold text-[#2c2a2acb]'>DEVELOPERS</h2>
                <ul className='flex flex-col space-y-1'>
                  <li className='text-blue-500 font-mono text-[17px] hover:text-[#2c2a2acb]'><a href="#">Docs</a></li>
                  <li className='text-blue-500 font-mono text-[17px] hover:text-[#2c2a2acb]'><a href="#">API Reference</a></li>

                </ul>
              </div>
            </div>

            {/* second box */}
            <div className='flex flex-col space-y-3'>
              <div className='flex flex-col space-y-1'>
                <h2 className='text-[20px] font-bold text-[#2c2a2acb]'>COMPANY</h2>
                <ul className='flex flex-col space-y-1'>
                  <li className='text-blue-500 font-mono text-[17px] hover:text-[#2c2a2acb]'><a href="#">About Us</a></li>
                  <li className='text-blue-500 font-mono text-[17px] hover:text-[#2c2a2acb]'><a href="#">Careers</a></li>
                  <li className='text-blue-500 font-mono text-[17px] hover:text-[#2c2a2acb]'><a href="#">Teams of Use</a></li>
                  <li className='text-blue-500 font-mono text-[17px] hover:text-[#2c2a2acb]'><a href="#">Privacy policy</a></li>
                </ul>
              </div>
              <div className='flex flex-col space-y-1'>
                <h2 className='text-[20px] font-bold text-[#2c2a2acb]'>HELP & SUPPORT</h2>
                <ul className='flex flex-col space-y-1'>
                  <li className='text-blue-500 font-mono text-[17px] hover:text-[#2c2a2acb]'><a href="#">Support</a></li>

                </ul>
              </div>
              <div className='flex flex-col space-y-1'>
                <h2 className='text-[20px] font-bold text-[#2c2a2acb]'>RESOURCES</h2>
                <ul className='flex flex-col space-y-1'>
                  <li className='text-blue-500 font-mono text-[17px] hover:text-[#2c2a2acb]'><a href="#">Blog</a></li>

                </ul>
              </div>
            </div>


            {/* Third box */}
            <div className='flex flex-col space-y-6'>
              <div className='flex flex-col space-y-3'>
                <h2 className='text-[23px] font-bold text-[#2c2a2acb]'>Find us online</h2>
                <div className='flex space-x-3'>
                  <a href="#"><img width={30} height={30} className='object-fill' src="https://curlec.com/build/browser/static/facebook.c8412162.svg" alt="" loading='lazy' /></a>
                  <a href="#"><img width={30} height={30} className='object-fill' src="https://curlec.com/build/browser/static/instagram.136e6800.svg" alt="" loading='lazy' /></a>
                  <a href="#"><img width={30} height={30} className='object-fill' src="https://curlec.com/build/browser/static/linkedin.f28970d6.svg" alt="" loading='lazy' /></a>
                </div>
              </div>
              <div className='flex flex-col space-y-3'>
                <h2 className='text-[20px] font-bold text-[#2c2a2acb]'>OFFICE ADDRESS</h2>
                <p className=' font-normal'>Private Office 57, Level 8, Komune Co-Working,
                  Vertical Corporate Tower B, The Vertical,
                  Bangsar South City, No. 8 Jalan Kerinchi, 59200
                  Kuala Lumpur, Malaysia.

                </p>
              </div>
              <div className='flex flex-col space-y-3'>
                <h2 className='text-[20px] font-bold text-[#2c2a2acb]'>CONTACT US</h2>
                <p className=' font-normal'>+90 909090900

                </p>
              </div>
              <div className='flex flex-col space-y-3'>
                <p className=' font-normal'> © Curlec Sdn Bhd 2025
                  All Rights Reserved</p>

              </div>
            </div>
          </div>

        </div>
      </section>

    </>
  )
}

export default App




{/* <svg viewBox="0 0 96 96" focusable="false" class="chakra-icon css-1dluisi">
  <circle cx="48" cy="48" r="48" transform="rotate(180 48 48)" fill="#F4F8FF" fill-opacity="0.7">
    </circle><g style="mix-blend-mode: multiply;"><circle cx="48.0001" cy="47.9998" r="33.1034" 
    transform="rotate(180 48.0001 47.9998)" fill="#F4F8FF" fill-opacity="0.7"></circle></g><g opacity="0.5">
      <g style="mix-blend-mode: multiply;"><rect x="52.3477" y="62.8967" width="20.6022" height="7.89307" rx="2"
       transform="rotate(-134.983 52.3477 62.8967)" fill="#28365E"></rect></g><rect x="57.9287" y="39.3738" width="20.6022"
 height="7.89307" rx="2" transform="rotate(135.302 57.9287 39.3738)" fill="#102562"></rect></g></svg> */}
