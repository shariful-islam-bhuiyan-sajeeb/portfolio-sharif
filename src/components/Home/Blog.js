import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const Blog = () => {
    const [data, setData]=useState([])

    useEffect(()=>{
        fetch('blogCard.json')
            .then(res => res.json())
            .then(data =>setData(data))
    },[])

    return (
        <div className='my-20'>
            <div className='text-center space-y-2 md:mb-10 mb-4'>
                <h2 className='md:text-3xl text-xl font-semibold font-serif uppercase'>Blog</h2>
                <p className='h-[2px] md:w-[70px] w-[50px] bg-[#2978CB] mx-auto'></p>
            </div>

            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                {
                    data.map(blog => <BlogCard 
                      key={blog.id}
                      blog={blog}
                    />)
                }
            </div>
        </div>
    );
};

export default Blog;