import React from 'react';
import { useDrop } from 'react-dnd';
import { useEditProjectMutation } from '../../features/project/projectApi';
import Project from '../Project';
import ProjectsHeader from '../ProjectsHeader';

const Done = ({done}) => {
    const [editProject]=useEditProjectMutation()
    const [{isOver},drop]=useDrop({
     accept:"project",
     drop:(item)=>addDropData(item),
     collect: (monitor) => ({
         isOver: !!monitor.isOver(),
       }),
    })
    const addDropData=(data)=>{
        const abc=done.find((p)=>p.id===data.id)
    if(!abc){
     editProject(
     {
         id:data.id,
         data:{status:"done"}
     })
    }
    }
    return (
        <div className={`flex flex-col flex-shrink-0 w-72 ${isOver&&"bg-slate-400 rounded"}`}
        ref={drop}
        >
        <ProjectsHeader name="Done" count={done.length} />

        <div className="flex flex-col pb-2 overflow-auto" 
     
        >
        {done?.map((project)=><Project key={project.id} project={project}/>)}    
        </div>
        </div>
    );
};

export default Done;