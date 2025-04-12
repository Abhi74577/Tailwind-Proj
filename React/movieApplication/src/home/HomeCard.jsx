import React from 'react'
import { NavLink } from 'react-router'
function HomeCard({ item }) {
  console.log(item)
  return (
    <div className='relative '>
      <div className='absolute  w-full -z-2'>
        <img className=' w-full lg:object-center object-cover   h-[100vh] overflow-hidden' src={item.cover} alt={item.name} loading='lazy' />
      </div>
      <div className='max-w-full  flex:col lg:flex lg:flex-row justify-center items-center  mt-[33px]' style={{
        "backgroundImage": "linear-gradient(to right bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))"

        }}>
        <div className='flex flex-col lg:px-8 md:px-10 px-6 py-5 justify-center lg:justify-start  lg:space-y-3'>
          <div className='lg:space-y-6 space-y-4  pt-[30px] pr-3'>
            <h1 className='font-extrabold text-[#ece7e7f3] text-4xl lg:text-5xl uppercase'>{item.name}</h1>
            {/* reating Icons */}
            <div className='flex space-x-2 '>
              {[...Array(Number(item.rating) || 0)].map((_, index) => (
                <i key={index} className="fa fa-star text-red-700"></i>
              ))}

            </div>
            <label className='text-[14px]'>{item.rating}</label>
            <span className='text-[14px]'>GP</span>
            <label className='text-[14px]'>{item.time}</label>
          </div>
          <div className='lg:max-w-[500px] md:max-w-[700px] max-w-[300px] hidden lg:block'>
            <p className='lg:text-[15px] '>{item.desc}</p>
          </div>

          <div className='max-w-full flex flex-col space-y-1'>
            <h2 className='text-[14px] lg:text-[16px]'>
              <span className='text-red-700 font-bold'>Starring</span>
              {item.starring}
            </h2>
            <h2 className='text-[14px] lg:text-[16px]'>
              <span className='text-red-700 font-bold'>Genres</span>
              {item.genres}
            </h2>
            <h2 className='text-[14px] lg:text-[16px]'>
              <span className='text-red-700 font-bold'>Tags</span>
              {item.tags}
            </h2>
          </div>

          <button className='flex border border-[#282727a8] rounded-md bg-red-700 text-[15px] max-w-[200px] lg:mt-[15px] mt-[10px] py-2 lg:px-5 px-2 
            justify-center items-center'>
            <i className='fas fa-play text-[15px]'></i>PLAY NOW
          </button>
        </div>
        {/* video pay */}

        <div className='max-w-full px-8 pb-3'>
          <NavLink className='' to={`/singlepage/${item.id}`}>
            <button className='flex justify-start items-center space-x-2 '>
              <div className='text-white '>
                {/* <img src='/images/play-button.png' alt='playbutton' /> */}
                <img className='w-[50px] object-cover' src='/images/play-button.png' alt='play' />
              </div>
              <span>WATCH TRAILER</span>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default HomeCard
