import React, { useEffect } from 'react'
import { FiUser } from "react-icons/fi";
import { BiCommentDots } from "react-icons/bi";
import { MdOutlineFaceRetouchingNatural } from "react-icons/md";
import User from '../../assets/img/user.png'
import img2 from '../../assets/img/bgImage2.jpg'
import { FaSearch } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useParams } from 'react-router';
import { useContext } from 'react';
import { BlogsContext } from '../../context/blogsConntext';
function SingleBlog() {
    const { id } = useParams()
    const { singleBlog, fetchSingleBlog } = useContext(BlogsContext)

    useEffect(() => {
        fetchSingleBlog(id)
    }, [id])
    console.log("Single blog: ", singleBlog)


    return (<>
        <section className='w-full relative h-[410px] lg:h-[350px]' style={{
            "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px"
            }}>
            <div className='w-full'>
                <img className='absolute w-full object-cover h-[400px] lg:h-[350px]' src={img2} alt='' loading='lazy' />

                <div className='relative flex flex-wrap justify-center items-center px-4 overflow-hidden  pt-20 '>
                    <div className='flex-col w-full mx-auto space-y-3'>
                        <h1 className='text-center text-3xl font-semibold lg:font-bold text-white '>Blog Details</h1>
                        <div className='w-22 h-1 bottom-0 bg-[#ebebf3] text-center mx-auto'></div>
                        <h1 className='text-center text-2xl font-semibold lg:font-bold text-white '>So you can check all req detail for blogs..</h1>
                    </div>
                </div>
            </div>
        </section>
        <div className='max-w-[1080px] mx-auto mt-15 py-10 px-14 flex relative justify-around  bg-[#faf7f7ec] ' style={{
            "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px"
            }}>
            <div className='flex flex-col space-y-4 justify-start items-start'>
                <div className='flex relative justify-center items-center space-x-3'>
                    <div className='flex text-[14px] text-[#565353] space-x-2 justify-center items-center font-semibold'>
                        <FiUser />
                        <span className=''>{singleBlog.brand}</span>
                    </div>
                    <div className='flex text-[14px] text-[#565353] space-x-2 justify-center items-center font-semibold'>
                        <BiCommentDots />
                        <span>{singleBlog.reviews?.length} comment(s)</span>
                    </div>
                    <div className='flex text-[14px] text-[#565353] space-x-2 justify-center items-center font-semibold'>
                        <MdOutlineFaceRetouchingNatural />
                        <span>{singleBlog.rating}</span>
                    </div>

                </div>
                <h2 className='text-[18px] font-bold text-[#1e1d1de7] sm:w-[430px] md:w-[200px] lg:w-[500px]'>{singleBlog.title}</h2>
                <p className='text-[14px] font-stretch-90% text-[#585656e7] sm:w-[430px] md:w-[200px] lg:w-[500px]'>{singleBlog.description}</p>
                <div className='flex relative justify-center items-center space-x-3'>
                    <span className='text-[14px] text-[#585656e7] font-stretch-95%'>Popular Tags:</span>
                    {
                        singleBlog.tags?.map((item) => (
                            <label className='py-[2px] px-2 text-[13px] rounded-md bg-[#203184] text-white text-center uppercase font-stretch-95%'>{item}</label>
                        ))
                    }

                    {/* <label className='py-[2px] px-2 text-[13px] rounded-md bg-[#203184] text-white text-center uppercase font-stretch-95%'>Mystery</label> */}
                </div>

                <div className='w-full flex relative justify-start items-center space-x-5 mt-5 border border-[#e7dedee7] p-4'>
                    <img src={User} width="83px" height="83px" loading='lazy' />
                    {
                        singleBlog.reviews?.length ?
                            <div className='text-[14px] font-mono text-[#312f2fe7]'>
                                <h2>{singleBlog.reviews[0].reviewerName}</h2>
                                <p>Email: {singleBlog.reviews[0].reviewerEmail}</p>
                                <p>Username: {singleBlog.reviews[0].reviewerName}</p>
                                <p>Address: sec-10 bb sss, India</p>
                            </div>

                            : <div className='text-[14px] font-mono text-[#312f2fe7]'>
                                <h2>Test Kumar</h2>
                                <p>Email: Test@gmail.com</p>
                                <p>Username: Test2233</p>
                                <p>Address: sec-10 bb sss, India</p>
                            </div>

                    }

                </div>
                <h2 className='text-[17px] font-bold text-[#2f2e2ee7] sm:w-[430px] md:w-[200px] lg:w-[500px] mt-2'>Comments</h2>
                {
                    singleBlog.reviews?.map((review) => (
                        <div className='w-full flex relative justify-start items-center space-x-5 border border-[#e7dedee7] p-4'>
                            <img src={User} width="60px" height="60px" loading='lazy' className='rounded-[100%]' />
                            <div className='text-[14px] font-mono text-[#312f2fe7] object-cover'>
                                <h2>{review.reviewerName}</h2>
                                <p>{review.comment}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className='w-[500px] ml-15 mt-9 flex flex-col justify-start items-start'>
                <h2 className='text-[18px] font-bold text-[#1e1d1de7] mb-10'>Recent News</h2>
                <div className='w-full flex-col relative justify-start items-start border border-[#e7dedee7] p-4'>
                    <div className='text-[15px] font-bold text-[#1e1d1de7]'>
                        <h2>Abhinav Tiwari</h2>
                    </div>
                    <div className='flex text-[14px] text-[#565353] space-x-2 justify-start items-center font-semibold'>
                        <MdOutlineFaceRetouchingNatural />
                        <span>7</span>
                    </div>
                </div>
                <div className='w-full flex-col relative justify-start items-start border border-[#e7dedee7] p-4'>
                    <div className='text-[15px] font-bold text-[#1e1d1de7]'>
                        <h2>Abhinav Tiwari</h2>
                    </div>
                    <div className='flex text-[14px] text-[#565353] space-x-2 justify-start items-center font-semibold'>
                        <MdOutlineFaceRetouchingNatural />
                        <span>7</span>
                    </div>
                </div>
                <div className='w-full flex-col relative justify-start items-start border border-[#e7dedee7] p-4'>
                    <div className='text-[15px] font-bold text-[#1e1d1de7]'>
                        <h2>Abhinav Tiwari</h2>
                    </div>
                    <div className='flex text-[14px] text-[#565353] space-x-2 justify-start items-center font-semibold'>
                        <MdOutlineFaceRetouchingNatural />
                        <span>7</span>
                    </div>
                </div>
                <div className='w-full flex-col relative justify-start items-start border border-[#e7dedee7] p-4'>
                    <div className='text-[15px] font-bold text-[#1e1d1de7]'>
                        <h2>Abhinav Tiwari</h2>
                    </div>
                    <div className='flex text-[14px] text-[#565353] space-x-2 justify-start items-center font-semibold'>
                        <MdOutlineFaceRetouchingNatural />
                        <span>7</span>
                    </div>
                </div>

            </div>
        </div>
    </>
    )
}

export default SingleBlog
