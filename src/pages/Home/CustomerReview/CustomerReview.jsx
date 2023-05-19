import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const CustomerReview = () => {
    return (
        <div className='py-24 px-14'>
            <div className='w-full mb-10'>
                <div className='text-center mx-auto lg:w-3/4'>
                    <h3 className='text-3xl font-bold pb-4'> Hear What Our Customers Say</h3>
                    <p className=' font-bold pb-8'>
                        Dive into a Treasure Trove of Customer Reviews, Where Delighted Customers Share Their Experiences and Rave about Our Products and Services!</p>
                </div>
            </div>
            {/* <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                <h3
                    className="mb-6 text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                    Hear What Our Customers Say
                </h3>
                <p className="mb-6 pb-2 md:mb-12 md:pb-0">
                    Dive into a Treasure Trove of Customer Reviews, Where Delighted Customers Share Their Experiences and Rave about Our Products and Services!
                </p>
            </div> */}


            <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12">

                {/* <!-- First  --> */}
                {/* <div className="mb-12 md:mb-0">
                    <div className="mb-6 flex justify-center">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                            className="w-32 rounded-full shadow-lg dark:shadow-black/30" />
                    </div>
                    <h5 className="mb-4 text-xl font-semibold">Maria Smantha</h5>
                    <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
                        Web Developer
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
                        id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                    </p>
                </div> */}

                {/* <!-- Second  --> */}
                <div className="mb-12 md:mb-0">
                    <div className="mb-6 flex justify-center">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                            className="w-32 rounded-full shadow-lg dark:shadow-black/30" />
                    </div>
                    <h5 className="mb-4 text-xl font-semibold">Shavona Mow</h5>
                    <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
                        Doctor form UK
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
                       
                        The toy variety at Toys Galore is unmatched. From classic favorites to the latest trends, they have it all. The quality of the toys is exceptional, ensuring hours of fun for my kids. Highly recommended!


                    </p>

                    <ul className="mb-0 flex items-center justify-center">

                        <span className='ml-5 '><Rating style={{ maxWidth: 100 }} value={5} readOnly /></span>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5 text-yellow-500">
                                <path
                                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                            </svg>
                        </li>
                    </ul>
                </div>

                <div className="mb-12 md:mb-0">
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
                    </p>
                    <ul className="mb-0 flex items-center justify-center">
                        <span className='ml-5 '><Rating style={{ maxWidth: 100 }} value={5} readOnly /></span>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5 text-yellow-500">
                                <path
                                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                            </svg>
                        </li>
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
                    </p>
                    <ul className="mb-0 flex items-center justify-center">
                        <span className='ml-5 '><Rating style={{ maxWidth: 100 }} value={5} readOnly /></span>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5 text-yellow-500">
                                <path
                                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                            </svg>
                        </li>
                    </ul>
                </div>

           
            </div>
        </div>
    );
};

export default CustomerReview;