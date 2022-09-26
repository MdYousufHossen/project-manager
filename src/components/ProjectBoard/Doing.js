import React from 'react';
import { useDrop } from 'react-dnd';
import { useEditProjectMutation } from '../../features/project/projectApi';
import Project from '../Project';
import ProjectsHeader from '../ProjectsHeader';

const Doing = ({doing}) => {
    const [editProject]=useEditProjectMutation()
    const [{isOver},drop]=useDrop({
     accept:"project",
     drop:(item)=>addDropData(item),
     collect: (monitor) =>  { 
        const itemVisible=doing.find((p)=>p.id===monitor.getItem()?.id)
          return {
          isOver: !!monitor.isOver()&&!itemVisible,
          
        }}
    })
    const addDropData=(data)=>{
        const abc=doing.find((p)=>p.id===data.id)
    if(!abc){
     editProject(
     {
         id:data.id,
         data:{status:"doing"}
     })
    }
    }
    return (
        <div className={`flex flex-col flex-shrink-0 w-72 ${isOver&&"bg-slate-400 rounded"}`}
        ref={drop}>
        <ProjectsHeader name="Doing" count={doing.length} />
        <div className="flex flex-col pb-2 overflow-auto"
        
        >
        {doing?.map((project)=><Project key={project.id} project={project}/>)} 
          
        </div>
        </div>
    );
};

export default Doing;