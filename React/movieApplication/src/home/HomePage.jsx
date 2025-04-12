import React, { useState } from 'react'
import { homeData } from '../dummyData.js'
import HomeCard from './HomeCard.jsx'
import Slider from "react-slick";
import Upcoming from '../components/upcoming/Upcoming.jsx';

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className='hidden lg:block'>
            <div className={className} onClick={onClick}>
                <i className='fa fa-chevron-left text-white font-bold'></i>
            </div>
        </div>
    );
}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className='hidden lg:block'>
            <div className={className} onClick={onClick}>
                <i className='fa fa-chevron-right'></i>
            </div></div>
    );
}

function HomePage() {
    const [items, setItems] = useState(homeData)
    var settings = {
        lazyLoad: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

    };
    console.log(items)
    return (


        <div className='relative top-10 h-[100vh] w-full text-[#fff]'>
            <Slider {...settings}>
                {
                    items.map((item) => (
                        <HomeCard item={item} key={item.id} />
                    ))
                }
            </Slider>
            <Upcoming/>
        </div>



    )
}

export default HomePage

