import React from 'react';

const ProfessionalSkill = () => {
    return (
        <div className='ml-6 mb-8' id='skill'>
            <div className='md:text-left text-center'>
                <h4 className=' font-semibold text-lg text-red-600'>THE SKILLS I HAVE GAINED AS A DEVELOPER</h4>
                <h1 className='md:text-6xl text-2xl font-bold text-gray-600 mt-4'>Professional Skill</h1>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 md:text-inline text-block mt-4  '>
                <div className='mr-2  '>
                    <h3 className='text-4xl md:text-left flex lg:justify-start justify-center font-bold text-gray-700 lg:my-4 '>Forn-End Skill</h3>
                    <div>
                        <p className='text-xl font-semibold text-gray-600 mb-2'>HTML-5</p>
                        <h2 className='flex items-center'><progress className="progress progress-success bg-gradient-to-r from-bg-cyan-500 to-bg-blue-500 w-11/12 h-4 mr-2" value="95" max="100"></progress> 95%</h2>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-gray-600 mb-2'>CSS-3</p>
                        <h2 className='flex items-center'><progress className="progress progress-success w-11/12 h-4 mr-2" value="90" max="100"></progress> 90%</h2>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-gray-600 mb-2'>Bootstrap</p>
                        <h2 className='flex items-center'><progress className="progress progress-success w-11/12 h-4 mr-2" value="90" max="100"></progress> 90%</h2>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-gray-600 mb-2'>Tailwind CSS</p>
                        <h2 className='flex items-center'><progress className="progress progress-success w-11/12 h-4 mr-2" value="95" max="100"></progress> 95%</h2>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-gray-600 mb-2'>JavaScrip</p>
                        <h2 className='flex items-center'><progress className="progress progress-success w-11/12 h-4 mr-2" value="90" max="100"></progress> 90%</h2>
                    </div>
                </div>
                <div>
                    <h3 className='text-4xl md:text-left flex lg:justify-start justify-center lg:my-4  lg:pt-0 pt-4 font-bold text-gray-700 '>Backend Skills</h3>
                    <div>
                        <p className='text-xl font-semibold text-gray-600 mb-2'>react Js</p>
                        <h2 className='flex items-center'><progress className="progress progress-success w-11/12 h-4 mr-2" value="90" max="100"></progress> 90%</h2>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-gray-600 mb-2'>Node.js</p>
                        <h2 className='flex items-center'><progress className="progress progress-success w-11/12 h-4 mr-2" value="60" max="100"></progress> 60%</h2>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-gray-600 mb-2'>Express.js</p>
                        <h2 className='flex items-center'><progress className="progress progress-success w-11/12 h-4 mr-2" value="65" max="100"></progress> 65%</h2>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-gray-600 mb-2'>MongoDB</p>
                        <h2 className='flex items-center'><progress className="progress progress-success w-11/12 h-4 mr-2" value="55" max="100"></progress> 55%</h2>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-gray-600 mb-2'>JWT Token</p>
                        <h2 className='flex items-center'><progress className="progress progress-success w-11/12 h-4 mr-2" value="50" max="100"></progress> 50%</h2>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default ProfessionalSkill;