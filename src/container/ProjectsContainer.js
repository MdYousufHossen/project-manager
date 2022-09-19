import React from 'react';
import Backlog from '../components/ProjectBoard/Backlog';
import Blocked from '../components/ProjectBoard/Blocked';
import Doing from '../components/ProjectBoard/Doing';
import Done from '../components/ProjectBoard/Done';
import Ready from '../components/ProjectBoard/Ready';
import Review from '../components/ProjectBoard/Review';

const ProjectsContainer = () => {
    return (
        <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
            <Backlog/>
            <Ready/>
            <Doing/>
            <Review/>
            <Blocked/>
            <Done/>
            <div className="flex-shrink-0 w-6"></div>
        </div>
    );
};

export default ProjectsContainer;