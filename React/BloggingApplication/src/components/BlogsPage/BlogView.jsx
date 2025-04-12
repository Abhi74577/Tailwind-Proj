import React, {useEffect, useState} from 'react'
import Card from '../Cards/Card'
import { useContext } from 'react'
import { BlogsContext } from '../../context/blogsConntext'
import Pagination from '../Pagination/Pagination'
function BlogView({serchingBlogs}) {
  const {blogs, fetchBlogs} = useContext(BlogsContext)
  const blogLimit = 6;
  const [paginate, setPaginate] = useState(1 * blogLimit);
  const paginateHandler = (value) => setPaginate(value * blogLimit);

  
  useEffect(() => {
    if(!serchingBlogs) {
      fetchBlogs();
    }
    else{
      if(serchingBlogs.length == 0){
        fetchBlogs();
        
      }
    }
    
   
    
  }, [])

  // console.log(blogs)
  
  return (
    <section className='relative mt-6 max-w-[98%] mx-auto p-5'>

      <div className='flex-col w-full mx-auto space-y-2'>
        <h1 className='text-center text-3xl font-semibold lg:font-bold '>Blogs</h1>
        <div className='w-22 h-1 bottom-0 bg-[#010a70] text-center mx-auto'></div>
      </div>
      <div className='max-w-[500px] mx-auto p-[2px] text-[16px] lg:text-[18px] font-sans text-[#2d2c2ced] mt-4 text-center'>
        <p>Etiam sagittis sem sed lacus laoreet, eu fermentum eros auctor. Proin at
    nulla elementum, consectetur ex eget, commodo ante. Sed eros mi, bibendum ut
    dignissim et, maximus eget nibh. Phasellus blandit quam turpis, at mollis</p>
      </div>
      <div className={blogs.length >= 3 ? 'w-full mx-auto mt-2 p-6 grid grid-rows-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5'
      : 'w-full mx-auto mt-2 p-6 flex justify-center items-center'}>
      {/* {
        blogs.map((cardItem) => (
          <Card cardItems={cardItem} key={cardItem.id}/>
        ))
      } */}

      {
        blogs.slice(paginate - 6, paginate).map((cardItem) => (
          <Card cardItem={cardItem} key={cardItem.id}/>
        ))
      }
        
      </div>

      {blogs.length!=0 && <Pagination noOfBlogs = {blogs.length} paginationHeader = {paginateHandler}

      />}
      
    </section>
  )
}

export default BlogView
