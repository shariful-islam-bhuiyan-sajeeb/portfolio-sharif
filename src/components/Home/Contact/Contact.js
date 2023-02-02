import React from 'react';
import background from '../../../asset/backgroundImage.jpg'
import { HiEnvelope, HiOutlineMapPin, HiPhone, IconName } from "react-icons/hi2";

const Contact = () => {
    return (

        <section className="sm:p-6 lg:mt-10 mt-6 " id='contact'>
            <div className='ml-6 md:text-left text-center'>
                <h2 className='text-md font-bold text-green-800'>FOR ANY QUERY PLEASE CONTACT WITH ME</h2>
                <h2 className='sm:text-5xl text-xl font-bold text-black py-2'>Contact With Me </h2>
            </div>
            
            <fieldset className=" my-4 py-10 rounded-md shadow-2xl"
                style={{
                    background: `url(${background})`,
                    backgroundSize: 'cover',

                }}>
                <div className='md:flex'>
                    <div className=" sm:col-span-full px-2 lg:col-span-3">
                        <div className=" col-span-full sm:col-span-3 md:w-1/2 w-full mx-auto ">
                            <h2 className='lg:text-5xl text-2xl font-bold flex justify-center'>Contact Me</h2>
                            <form action='https://formspree.io/f/meqdydrb' method='POST' className='mt-6 '>
                                <input type="text" name='userName' placeholder="Type Name" required className="input input-bordered shadow-xl mb-6 text-black  w-full " />
                                <input type="text" name='email' placeholder="Type your Email"  required className="input input-bordered shadow-xl mb-6  w-full " />
                                <input type="text" name='object' placeholder="Type your Object" required className="input input-bordered shadow-xl mb-6  w-full " />
                                <input type="text" name='massage' placeholder="Type your Massage" required className="input input-bordered shadow-xl mb-8 py-12  w-full " />
                                <div className='sm:w-80 mx-auto text-center '>
                                    <button className="btn  bg-gradient-to-r from-purple-500 to-pink-500 w-80  ">Submit</button>
                                </div>
                            </form >
                            
                        </div>
                    </div>

                    <div className='flex justify-center items-center md:pl-3'>
                        <div className='pt-8 sm:pt-0 px-2  '>
                            <div className='flex items-center mb-8'>
                                <span className='mr-5 lg:text-5xl text-xl lg:p-5 p-3 border border-black'><HiPhone className='  text-green-600' ></HiPhone></span>
                                <div>
                                    <h2 className=' text-2xl font-bold'>Phone/WhatsApp</h2>
                                    <p className='text-xl font-bold'>01791514345</p>
                                </div>
                            </div>
                            <div className='flex items-center mb-8'>
                                <span className='mr-5 lg:text-5xl text-xl lg:p-5 p-3 border border-black'><HiEnvelope className='text-black' ></HiEnvelope></span>
                                <div>
                                    <h2 className=' text-2xl font-bold'>Email</h2>
                                    <p className='text-xl font-bold'>sharifulislambhuiyan93@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <span className='mr-5 lg:text-5xl text-xl lg:p-5 p-3 border border-black'><HiOutlineMapPin className='text-black' ></HiOutlineMapPin></span>
                                <div>
                                    <h2 className=' text-2xl font-bold'>Address</h2>
                                    <p className='text-xl font-bold'>Dhaka,Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
        </section>


    );
};

export default Contact;