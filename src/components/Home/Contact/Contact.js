import React from 'react';
import background from '../../../asset/backgroundImage.jpg'
import { HiEnvelope, HiOutlineMapPin, HiPhone, IconName } from "react-icons/hi2";

const Contact = () => {
    return (

        <section className=" lg:mt-10 mt-6 " id='contact'>
            <div className='text-center space-y-3'>
                <h2 className='sm:text-5xl text-xl font-bold font-serif text-black py-2'>Contact With Me </h2>
                <p className='h-[2px] md:w-[220px] sm:[180px] w-[100px] bg-[#2978CB] mx-auto'></p>

            </div>
            
            <fieldset className=" md:mt-8 sm:mt-6 mt-4 py-10 shadow-2xl"
                style={{
                    background: `url(${background})`,
                    backgroundSize: 'cover',

                }}>
                <div className='md:flex  '>
                    <div className=" sm:col-span-full md:px-2 px-6 lg:col-span-3">
                        <div className=" col-span-full sm:col-span-3 md:w-1/2 w-full mx-auto ">
                            <h2 className='md:text-5xl text-2xl font-bold font-serif flex justify-center'>Contact Me</h2>
                            <form action='https://formspree.io/f/meqdydrb' method='POST' className='mt-6 '>
                                <input type="text" name='userName' placeholder="Type Name" required className="input md:py-4 py-8 input-bordered shadow-xl mb-6 text-black  w-full " />
                                <input type="text" name='email' placeholder="Type your Email" required className="input input-bordered shadow-xl mb-6  md:py-4 py-8 w-full " />
                                
                                <input type="text" name='massage' placeholder="Type your Massage" required className="input input-bordered shadow-xl mb-8 py-12  w-full " />
                                <div className=' text-center '>
                                    <button className="btn bg-[#2978CB] hover:bg-gradient-to-r from-purple-500 to-pink-500 w-11/12   ">Submit</button>
                                </div>
                            </form >
                            
                        </div>
                    </div>

                    <div className='flex items-center md:mt-3 mt-6 md:pl-0 pl-4'>
                        <div className='md:mt-0 mt-4 px-2 space-y-4  '>
                            <div className='flex items-center gap-4'>
                                <span className=' text-5xl  lg:p-5 p-3 border border-black'><HiPhone className='  text-blue-700' ></HiPhone></span>
                                <div className='font-semibold font-serif'>
                                    <h2 className=' text-2xl'>Phone/WhatsApp</h2>
                                    <p className='text-xl flex items-center'>01791514345</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <span className='text-5xl  lg:p-5 p-3 border border-black'><HiEnvelope className='text-blue-700' ></HiEnvelope></span>
                                <div className='font-semibold font-serif'>
                                    <h2 className=' text-2xl'>Email</h2>
                                    <p className='text-xl'>sharifulislambhuiyan93@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <span className=' text-5xl lg:p-5 p-3 border border-black'><HiOutlineMapPin className='text-blue-700' ></HiOutlineMapPin></span>
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