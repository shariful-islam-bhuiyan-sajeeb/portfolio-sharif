import React from 'react';
import ProjectsCard from '../Home/ProjectsCard/ProjectsCard';

const Projects = () => {
    return (
        <div className='mt-10 px-12' id='projects'>
            <h4 className='text-red-600 font-semibold'>VISIT MY PROJECT AND GIVE YOUR FEEDBACK</h4>
            <h2 className='text-5xl font-bold mt-7'>My Projects</h2>
            <div className='  mt-10'>
                <ProjectsCard></ProjectsCard>
            </div>
        </div>
    );
};

export default Projects;