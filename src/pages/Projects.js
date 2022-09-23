import React from 'react';

import Header from '../components/Header';
import Layout from '../components/Layout';
import ProjectsContainer from '../container/ProjectsContainer';

const Projects = () => {
    return (
        <Layout projects>
            <Header name="Project Board"/>
            <ProjectsContainer/>  
        </Layout>
    );
};

export default Projects;