import React from 'react'

function UpcomingCard({ item }) {
  console.log("upcomingcard",item)
  return (
    <div className='relative w-[1080px] flex flex-row space-x-3 pl-16  cursor-pointer pulse-animation'>
      <div className='absolute -z-2'>
        <img className='relative object-center h-[300px] w-[300px]' src={item.cover} alt={item.name} loading='lazy' />
      </div>
      <div className=' w-[300px] h-[300px]  flex flex-col justify-center py-3 px-10 space-y-2'  style={{
        "backgroundImage": "linear-gradient(to right bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))"

        }}>
        <h1 className='text-[18px] font-medium'>{item.name}</h1>
        <span>{item.time}</span>
        <button className='max-w-[100px] border-[#282727a8] bg-red-700 text-[14px] py-[3px] px-[5px] hover:cursor-pointer
          '>
            <i className='fas fa-play text-[15px]'></i>PLAY NOW
          </button>
      </div>
      {/* <h2 className='text-white font-bold text-[18px]'>Upcoming Movie</h2> */}
    </div>

    
               
  )
}

export default UpcomingCard
