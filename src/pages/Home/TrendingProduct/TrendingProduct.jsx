import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TrendingProduct = () => {
    const [trendingToys, setTrendingToys] = useState([])

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with options (optional)
        AOS.refresh(); // Refresh AOS when new elements are added dynamically (optional)
    }, []);

    useEffect(() => {
        fetch(`https://toy-marketplace-assignment-11-server.vercel.app/trendingToys`)
            .then(res => res.json())
            .then(data => setTrendingToys(data))
    }, [])

    // console.log(trendingToys)

    return (
        <div className='py-24 px-14 bg-slate-200'>
            <div className='w-full mb-10'>
                <div className='text-center mx-auto lg:w-3/4'>
                    <h3 className='text-3xl font-bold pb-4'> Trending Product</h3>
                    <p className=' font-bold pb-8'>
                        Stay Ahead of the Curve with Our Trending Toy Selection</p>
                </div>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    trendingToys?.map(toy => (
                        <div
                            data-aos="zoom-in"
                            class="block rounded-lg w-full  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <div
                                class="relative overflow-hidden bg-cover bg-no-repeat"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                <img
                                    class="rounded-t-lg w-full h-60"
                                    src={toy?.img}
                                    alt="" />
                                <a href="#!">
                                    <div
                                        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                                </a>
                            </div>
                            <div class="p-6">
                                <span className='ml-5 '><Rating style={{ maxWidth: 100 }} value={5} readOnly /></span>

                                <h5
                                    class="mb-2 mt-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    {toy?.name}
                                </h5>
                                <h5
                                    class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    {toy?.price} $
                                </h5>

                                <button className='text-black py-2 px-6 mb-5 bg-yellow-500 text-[16px] mt-6 hover:bg-black hover:text-white transition-all font-bold rounded-full'>Buy Now</button>
                            </div>
                        </div>
                    ))
                }


            </div>


        </div>
    );
};

export default TrendingProduct;

