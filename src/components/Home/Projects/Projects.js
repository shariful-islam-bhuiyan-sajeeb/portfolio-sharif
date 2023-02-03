import React from 'react';
import ProjectsCard from '../Home/ProjectsCard/ProjectsCard';

const Projects = () => {
    return (
        <div className='md:mt-14 mt-8 px-12 text-center ' id='projects'>
            <div className='space-y-4'>
                <p className='h-[2px] w-[180px]  bg-[#2978CB] mx-auto'></p>
                <h2 className='text-5xl font-bold font-serif text-gray-600'>My Projects</h2>
            </div>
            <div className='  mt-10'>
                <ProjectsCard></ProjectsCard>
            </div>
        </div>
    );
};

export default Projects;