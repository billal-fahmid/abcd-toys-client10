import React, { useEffect, useState, useRef } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const CustomerReview = () => {

    const [reviews, setReview] = useState([])

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with options (optional)
        AOS.refresh(); // Refresh AOS when new elements are added dynamically (optional)
    }, []);

    useEffect(() => {
        fetch(`https://toy-marketplace-assignment-11-server.vercel.app/customerReview`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    // console.log(reviews)

    return (
        <div className='py-24 px-14 '>
            <div className='w-full mb-10'>
                <div className='text-center mx-auto lg:w-3/4'>
                    <h3 className='text-3xl font-bold pb-4'> Hear What Our Customers Say</h3>
                    <p className=' font-bold pb-8'>
                        Dive into a Treasure Trove of Customer Reviews, Where Delighted Customers Share Their Experiences and Rave about Our Products and Services!</p>
                </div>
            </div>


            {/* 
           <div className="" id=''>

                <Swiper
                     slidesPerView={3}
                     spaceBetween={30}
                     freeMode={true}
                     pagination={{
                       clickable: true,
                     }}
                     modules={[FreeMode, Pagination]}
                     className="mySwiper"
                >

                        {reviews?.map(review => (<SwiperSlide>
                    <div
                        data-aos="flip-up"
                        className="mb-12 md:mb-0">
                        <div className="mb-6 flex justify-center">
                            <img
                                src={review?.img}
                                className="w-32 rounded-full shadow-lg dark:shadow-black/30" />
                        </div>
                        <h5 className="mb-4 text-xl font-semibold">{review?.name}</h5>
                        <h6 className="mb-4 font-semibold text-pink-500 dark:text-primary-500">
                            {review?.profession}
                        </h6>
                        <p className="mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="inline-block h-7 w-7 pr-2"
                                viewBox="0 0 24 24">
                                <path
                                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                            </svg>

                            {review?.review}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="inline-block h-7 w-7 pr-2 ml-2"
                                viewBox="0 0 24 24">
                                <path
                                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                            </svg>

                        </p>

                        <ul className="mb-0 flex items-center justify-center">

                            <span className='ml-5 '><Rating style={{ maxWidth: 100 }} value={review?.rating} readOnly /></span>

                        </ul>
                    </div>

                    </SwiperSlide>
                   
                ))} 
                     <SwiperSlide> Add more </SwiperSlide>
                    
                   
                    
                </Swiper>

                {/* <div className="mb-12 md:mb-0">
                    <div className="mb-6 flex justify-center">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
                            className="w-32 rounded-full shadow-lg dark:shadow-black/30" />
                    </div>
                    <h5 className="mb-4 text-xl font-semibold">Lisa Cudrow</h5>
                    <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
                        Engineer of MIT
                    </h6>
                    <p className="mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="inline-block h-7 w-7 pr-2"
                            viewBox="0 0 24 24">
                            <path
                                d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                        </svg>
                        Toys Galore has become my go-to place for all my toy shopping needs. Their website is user-friendly, making it easy to find what I'm looking for. The ordering process is seamless, and the shipping is quick. I appreciate the attention to detail and the overall positive shopping experience.
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5 text-black inline-block ml-2">
                                <path
                                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                            </svg>
                    </p>
                    <ul className="mb-0 flex items-center justify-center">
                        <span className='ml-5 '><Rating style={{ maxWidth: 100 }} value={5} readOnly /></span>
                   
                    </ul>
                </div>

                <div className="mb-12 md:mb-0">
                    <div className="mb-6 flex justify-center">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                            className="w-32 rounded-full shadow-lg dark:shadow-black/30" />
                    </div>
                    <h5 className="mb-4 text-xl font-semibold">Mosha Ali</h5>
                    <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
                        Professor
                    </h6>
                    <p className="mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="inline-block h-7 w-7 pr-2"
                            viewBox="0 0 24 24">
                            <path
                                d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                        </svg>
                        I had a query regarding a toy I purchased, and the customer service team at Toys Galore went above and beyond to assist me. They were friendly, knowledgeable, and resolved my issue promptly. It's refreshing to find a company that genuinely cares about their customers.
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="inline-block h-7 w-7 pr-2 ml-2"
                            viewBox="0 0 24 24">
                            <path
                                d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                        </svg>
                    </p>
                    <ul className="mb-0 flex items-center justify-center">
                        <span className='ml-5 '><Rating style={{ maxWidth: 100 }} value={5} readOnly /></span>
                     
                    </ul>
                </div> */}


            {/* </div> */}
            <div className="px-4 md:px-8 lg:px-16 xl:px-20" id="">

                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >

                    {reviews?.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div
                                data-aos="flip-up"
                                className="mb-6 md:mb-0"
                            >
                                <div className="mb-3 flex justify-center">
                                    <img
                                        src={review?.img}
                                        alt={`Review by ${review?.name}`}
                                        className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg dark:shadow-black/30"
                                    />
                                </div>
                                <h5 className="mb-2 text-lg md:text-xl font-semibold">{review?.name}</h5>
                                <h6 className="mb-2 font-semibold text-pink-500 dark:text-primary-500">
                                    {review?.profession}
                                </h6>
                                <p className="mb-2 text-sm md:w-1/2 mx-auto md:text-base">
                                    {review?.review}
                                </p>
                                <div className="flex items-center justify-center mb-2">
                                    <Rating style={{ maxWidth: 100 }} value={review?.rating} readOnly />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>

        </div>
    );
};

export default CustomerReview;