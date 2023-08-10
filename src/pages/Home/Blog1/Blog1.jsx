import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const Blog1 = () => {

    const [blogs , setBlogs] = useState([]);

    useEffect(()=>{
        fetch('https://toy-marketplace-assignment-11-server.vercel.app/blogs1')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])
    console.log(blogs)

    return (
        <div className='pt-24 pb-20 px-14'>
             <div className='text-center mb-5' data-aos="zoom-in">
                <h3 className='text-3xl font-bold pb-4'>Latest Blog</h3>
                <p className=' font-semibold md:w-1/2 mx-auto pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center'>
               {
                blogs?.map(blog=> <BlogCard key={blog._id} blog={blog}></BlogCard>)
               }
            </div>
        </div>
    );
};

export default Blog1;