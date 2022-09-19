import React from 'react';
import Project from '../Project';
import ProjectsHeader from '../ProjectsHeader';

const Ready = () => {
    return (
        <div className="flex flex-col flex-shrink-0 w-72">
        <ProjectsHeader name="Ready" />
        <div className="flex flex-col pb-2 overflow-auto">
           <Project/>
           <Project/>
           <Project/>
          
        </div>
        </div>
    );
};

export default Ready;