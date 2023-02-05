import { CProgress, CProgressBar } from '@coreui/react';
import ProgressBar from '@ramonak/react-progress-bar';
import React, { useEffect, useState } from 'react';

const ProfessionalSkill = () => {
    const [completed, setCompleted] = useState(95);

    useEffect(() => {
        setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 5), 2000);
    }, []);
    return (
        
        <div className='ml-6 mb-8' id='skill'>
            
            <div className=' md:my-14 my-10 text-center space-y-3'>
                <h4 className=' font-semibold text-lg text-gray-600 '>THE SKILLS I HAVE GAINED AS A DEVELOPER</h4>
                <h1 className='md:text-5xl text-2xl font-semibold text-gray-600 pt-0'>Professional Skill</h1>
                <p className='h-[2px] md:w-[280px] sm:[200px] w-[150px] bg-[#2978CB] mx-auto'></p>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 md:text-inline text-block mt-4  '>
                <div className='mr-2  '>
                    <h3 className='text-4xl md:text-left flex lg:justify-start justify-center font-bold text-gray-700 lg:my-4 '>Forn-End Skill</h3>
                    <div>
                        <p className='text-xl font-semibold text-gray-600 mb-2'>HTML-5</p>
                        <div className='flex items-center gap-2'>
                            <p className=' w-11/12'> <ProgressBar className='' completed={completed} /></p>
                            <p className='font-semibold text-[#2978CB]'>95%</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-gray-600 mb-2'>CSS-3</p>
                        <div className='flex items-center gap-2'>
                            <p className=' w-11/12'> <ProgressBar completed={completed} /></p>
                            <p className='font-semibold text-[#2978CB]'>90%</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-gray-600 mb-2'>Bootstrap</p>
                        <div className='flex items-center gap-2'>
                            <p className=' w-11/12'> <ProgressBar completed={completed} /></p>
                            <p className='font-semibold text-[#2978CB]'>90%</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-gray-600 mb-2'>Tailwind CSS</p>
                        <div className='flex items-center gap-2'>
                            <p className=' w-11/12'> <ProgressBar completed={completed} /></p>
                            <p className='font-semibold text-[#2978CB]'>95%</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-gray-600 mb-2'>JavaScrip</p>
                        <div className='flex items-center gap-2'>
                            <p className=' w-11/12'> <ProgressBar completed={completed} /></p>
                            <p className='font-semibold text-[#2978CB]'>95%</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='text-4xl md:text-left flex lg:justify-start justify-center lg:my-4  lg:pt-0 pt-4 font-bold text-gray-700 '>Backend Skills</h3>
                    <div>
                        <p className='text-xl font-semibold text-gray-600 mb-2'>react Js</p>
                        <div className='flex items-center gap-2'>
                            <p className=' w-11/12'> <ProgressBar completed={completed} /></p>
                            <p className='font-semibold text-[#2978CB]'>90%</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-gray-600 mb-2'>Node.js</p>
                        <div className='flex items-center gap-2'>
                            <p className=' w-11/12'> <ProgressBar completed={completed} /></p>
                            <p className='font-semibold text-[#2978CB]'>65%</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-gray-600 mb-2'>Express.js</p>
                        <div className='flex items-center gap-2'>
                            <p className=' w-11/12'> <ProgressBar completed={completed} /></p>
                            <p className='font-semibold text-[#2978CB]'>65%</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-gray-600 mb-2'>MongoDB</p>
                        <div className='flex items-center gap-2'>
                            <p className=' w-11/12'> <ProgressBar completed={completed} /></p>
                            <p className='font-semibold text-[#2978CB]'>55%</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-gray-600 mb-2'>JWT Token</p>
                        <div className='flex items-center gap-2'>
                            <p className=' w-11/12'> <ProgressBar completed={completed} /></p>
                            <p className='font-semibold text-[#2978CB]'>50%</p>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default ProfessionalSkill;