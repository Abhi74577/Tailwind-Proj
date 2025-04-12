import React from 'react'
import { FaSmileWink } from "react-icons/fa";
import { useNavigate } from 'react-router';

function Card({cardItem}) {
    const navigate = useNavigate()
    // console.log("carditem", cardItem)
    return (
        <section className='relative mt-5'>
            <div className='w-full flex justify-center p-4'>
                <div className=' flex flex-col border-2 text-start py-5 px-4 
                    space-y-2 text-[#2c2b2bec] hover:bg-[#0e36b5e3] hover:text-[#dcdbdbec]'>
                    <h2 className='text-[16px] font-bold '>{cardItem?.title}</h2>
                    <p className='text-[15px] font-mono'>{cardItem?.description}</p>

                    <div className='flex space-x-2 items-center'>
                        <FaSmileWink />
                        <span className='text-[16px] font-mono'>{cardItem?.rating}</span>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <button className='text-[16px] font-sans border-1 border-[#2b2b2b] rounded-md px-2 py-1 cursor-pointer' onClick={() => navigate(`/sigleBolg/${cardItem.id}`)}>
                            Read More
                        </button>
                    </div>

                </div>
            </div>
            


        </section>
    )
}

export default Card
