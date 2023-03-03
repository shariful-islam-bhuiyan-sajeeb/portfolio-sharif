import React from 'react';

const BlogCard = ({ blog }) => {
    const { img, title, date, details } = blog

    return (
        <div>
            <div id='blog' className=" w-full  px-4  ease-in-out duration-500 transform hover:scale-125 ">
                <div className='rounded-t-lg space-y-2 hover:border-b hover:border-x hover:border-blue-600 shadow '>
                    <img className='lg:h-[280px] h-auto w-full rounded-t-lg  ' src={img} alt="" />
                    <div className=" px-2">
                        <h2 className="card-title font-serif text-2xl font-semibold">
                            {title}
                        </h2>
                        <div className='space-y-1'>
                            <p className='text-gray-400 text-lg font-mono'>{date}</p>
                            <p className='text-gray-500 text-justify'>{details.slice(0, 150,)}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogCard;