import React, { useState } from 'react';

const BlogCard = ({ blog }) => {
    const [hover, setHover] = useState(true)

    return (
        <div className=' overflow-hidden ' onMouseLeave={() => setHover(!hover)} onMouseEnter={() => setHover(!hover)}>
            <div className='overflow-hidden'>
                <img className={`w-full  object-cover ${hover ? 'scale-125 transition-all' : ''}`} src={blog.img} alt="" />
            </div>
            <div>
                <div className='flex gap-6 mt-10'>
                    <h1 className='text-[16px] text-gray-500 font-bold'>By, <span className='font-semibold hover:text-gray-600 text-yellow-400'>{blog.authorName}</span></h1>
                    <li className='text-[16px] text-gray-700 font-semibold'>{blog.date}</li>
                </div>
                <h1 className='text-2xl mt-4 font-semibold hover:text-yellow-400 text-gray-500'>{blog.blogTitle}</h1>
                <button className='text-black py-2 px-6 mb-5 bg-yellow-500 text-[16px] mt-6 hover:bg-black hover:text-white transition-all font-bold rounded-full'>Read More</button>
            </div>
        </div>
    );
};

export default BlogCard;