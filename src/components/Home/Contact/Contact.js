import React from 'react';
import { HiCursorArrowRays} from "react-icons/hi2";


const Contact = () => {
    return (

        <section className=" lg:mt-10 mt-6 px-4" id='contact'>
            <div className='text-center sm:space-y-3 space-y-1'>
                <h2 className='sm:text-5xl text-xl font-bold font-serif text-black py-2'>Contact With Me </h2>
                <p className='h-[2px] md:w-[220px] sm:[180px] w-[100px] bg-[#2978CB] mx-auto'></p>
            </div>

            <fieldset className=" md:mt-8 sm:mt-6 mt-4 hover:border hover:border-blue-600 translate rounded-lg py-4  mx-auto ">
                <div className=' lg:w-10/12 md:w-11/12 mx-auto'>
                    <div className=" sm:col-span-full md:px-2 px-6 lg:col-span-3">
                        <div className=" col-span-full sm:col-span-3 w-full mx-auto ">
                            <form
                                action='https://formspree.io/f/meqdydrb'
                                method='POST'
                                className='mt-6 w-full space-y-4'>
                                <div className='flex sm:flex-row flex-col gap-4 text-lg font-serif'>
                                    <div className='flex flex-col w-full mx-auto'>
                                        <label className=''>Name:</label>
                                        <input type="text"
                                            placeholder="Type your name"
                                            className=" input input-bordered border-black  w-full" />
                                    </div>
                                    <div className='flex flex-col w-full mx-auto'>
                                        <label>Email:</label>
                                        <input type="Email"
                                            name='email'
                                            placeholder="Type your Email" required
                                            className="input input-bordered border-black w-full " />
                                    </div>

                                </div>
                               <div className='text-xl font-serif space-y-2'>
                                    <label>Message</label>
                                    <input type="text"
                                        name='massage'
                                        placeholder="Type your Massage" required
                                        className="input input-bordered border-black mb-8 py-12  w-full "
                                    />
                               </div>
                                <div className=' text-center text-xl font-serif hover:font-semibold  w-3/4 mx-auto '>
                                    <button className=" flex items-center justify-center gap-2 bg-[#2978CB] hover:bg-green-700 hover:text-white translate py-2 rounded-md uppercase  w-full ">Submit <HiCursorArrowRays/></button>
                                </div>
                            </form >
                        </div>
                    </div>

                </div>
            </fieldset>
        </section>


    );
};

export default Contact;