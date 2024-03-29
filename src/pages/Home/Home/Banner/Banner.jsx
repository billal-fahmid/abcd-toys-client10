import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className=' min-h-screen w-full bg-sky-200 py-16 px-14'>

            <div className='flex items-center flex-col md:flex-row'>

                <div className='w-full md:w-1/2 text-[#252525]  text-left '>

                    <h2 className='text-5xl font-bold mt-24 mb-10 '>Play, Learn, Grow: Explore our  ABCD Toys Todays</h2>

                    <p className='text-xl font-bold pb-8'>Give The Gift Of Your Children Everyday</p>
                    <button className='text-black py-2 px-6 mb-5 bg-yellow-500 text-[16px] mt-6 hover:bg-black hover:text-white transition-all font-bold rounded-full'>Explore Now</button>
                </div>

                <div data-aos="fade-down" className='w-full md:w-1/2 mt-10 md:mt-0'>
                    <img className='object-contain' src="https://i.ibb.co/MVTgP52/ezgif-com-webp-to-png.png" alt="" />
                </div>

            </div>
           
        </div>
    );
};

export default Banner;