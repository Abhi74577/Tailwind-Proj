import React from 'react'

function Pagination({noOfBlogs, paginationHeader}) {
    let nbOfPaginationItems = Math.ceil(noOfBlogs / 6);
  return (
    <div className='flex justify-center items-center space-x-3'>
    {
        [...Array(nbOfPaginationItems)].map((item, idx) =>{
            return(
                <button className='py-[3px] px-[10px] text-center text-[15px]
                text-white bg-blue-700 hover:cursor-pointer hover:bg-[#b0b0b0ba] hover:text-[#242424]' type='button'
                onClick={() => paginationHeader(idx + 1)} key={idx}>
                    { idx + 1}
                </button>
            )
        })
    }
      
    </div>
  )
}

export default Pagination
