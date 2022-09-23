import React from 'react';
import Backlog from '../components/ProjectBoard/Backlog';
import Blocked from '../components/ProjectBoard/Blocked';
import Doing from '../components/ProjectBoard/Doing';
import Done from '../components/ProjectBoard/Done';
import Ready from '../components/ProjectBoard/Ready';
import Review from '../components/ProjectBoard/Review';
import { useGetProjectsQuery } from '../features/project/projectApi';


const ProjectsContainer = () => {
    const {data}=useGetProjectsQuery()
    const backlog=data?.filter((p)=>p.status==="backlog")
    const blocked=data?.filter((p)=>p.status==="blocked")
    const doing=data?.filter((p)=>p.status==="doing")
    const done=data?.filter((p)=>p.status==="done")
    const ready=data?.filter((p)=>p.status==="ready")
    const review=data?.filter((p)=>p.status==="review")
    return (
        <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
          {data&& <>
           <Backlog backlog={backlog}/>
            <Ready ready={ready}/>
            <Doing doing={doing}/>
            <Review review={review}/>
            <Blocked blocked={blocked}/>
            <Done done={done}/>
            <div className="flex-shrink-0 w-6"></div>
           </>}
        </div>
    );
};

export default ProjectsContainer;