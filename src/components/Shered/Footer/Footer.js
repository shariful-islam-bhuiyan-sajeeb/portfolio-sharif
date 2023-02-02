import React from 'react';
import sojib from '../../../asset/sojib2.jpg'

const Footer = () => {
    return (
        <footer className="px-4  ">
           
                <div className="divider"></div> 
                <div className="container flex flex-col justify-center items-center py-10 mx-auto  lg:flex-row lg:space-y-0">
                    <div className='text-center'>
                        <div className='flex justify-center items-center mb-4'>
                            <img alt="" className="w-20 h-20 text-center rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src={sojib} />
                        </div>
                        <h2 className='text-xl font-bold'>PORTFOLIO</h2>
                        <div className="py-2 text-sm text-center text-black">© 1968 Company Co. All rights reserved.</div>
                    </div>
                </div>
            
            
        </footer>
    );
};

export default Footer;