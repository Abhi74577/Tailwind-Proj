import React from 'react'
import { upcome, latest } from '../../dummyData'
import { NavLink } from "react-router";
import UpcomingCard from './UpcomingCard';
import Slider from "react-slick";
function Upcoming() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1550, // Large screens (1280px and below)
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1550, // Large screens (1280px and below)
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1250, // Large screens (1280px and below)
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='flex justify-between items-center p-10 pl-16'>
                <h2 className='text-white font-bold text-[18px]'>Upcoming Movie</h2>
                <NavLink className="text-white font-bold text-[18px]" to="/viewAll" end>
                    View All
                </NavLink>
            </div>
            <Slider {...settings}>

                {
                    upcome.map((item) => (
                        <UpcomingCard item={item} key={item.id} />
                    ))
                }</Slider>

        </>
    )
}

export default Upcoming
