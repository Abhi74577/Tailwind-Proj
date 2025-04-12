import React, { useState, useContext } from 'react'
import img2 from '../../assets/img/bgImage2.jpg'
import { FaSearch } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Card from '../Cards/Card';
import BlogView from '../BlogsPage/BlogView';
import { BlogsContext } from '../../context/blogsConntext';
function Home() {
const {blogs, fetchBlogsFromSearch, fetchBlogs} = useContext(BlogsContext)
const [searching, setSearching] = useState('')


function handleSearching(){
  if(searching != ''){
    fetchBlogsFromSearch(searching)
  }
  else{
    fetchBlogs()
  }
  
}
console.log("Serching: ",blogs)

  return (
    <>
      <section className='w-full relative h-[410px] lg:h-[465px]'>
        <div className='w-full'>
          <img className='absolute w-full object-cover h-[400px] lg:h-[460px]' src={img2} alt='' loading='lazy' />
          <h2 className='relative text-white text-center font-bold uppercase pt-32 
            lg:pt-38 text-[20px] px-4'>A beautiful blog with no images required </h2>
          <div className='relative flex flex-wrap justify-center items-center pt-5 px-4 overflow-hidden'>
            <input className='border-2 border-[#03063e] py-[7px] 
            lg:px-5 md:px-5 px-3 text-[#1f1e1e] text-[20px] bg-[#fff] font-semibold'
              type='text' id='search' name='search' placeholder='Search'  value={searching} onChange={(e) => setSearching(e.target.value)}/>
            <button type='button' className='border-1 border-[#03063e] py-2 px-2 lg:px-5 md:px-5
           bg-blue-700 text-white text-[28px] cursor-pointer' onClick={handleSearching}>
              <IoSearch />
            </button>
          </div>
        </div>
      </section>
      <BlogView serchingBlogs={blogs}/>
    </>

  )
}

export default Home
