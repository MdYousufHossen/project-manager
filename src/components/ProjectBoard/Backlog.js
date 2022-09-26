import React from 'react';
import { useDrop } from 'react-dnd';
import { useEditProjectMutation } from '../../features/project/projectApi';
import Project from '../Project';
import ProjectsHeader from '../ProjectsHeader';
const Backlog = ({backlog}) => {
   
    const [editProject]=useEditProjectMutation()
    const [{isOver},drop]=useDrop({
    accept:"project",
    drop:(item)=>{
        addDropData(item)},
    collect: (monitor) =>  { 
      const itemVisible=backlog.find((p)=>p.id===monitor.getItem()?.id)
        return {
        isOver: !!monitor.isOver()&&!itemVisible,
        
      }}
   })

    const addDropData=(data)=>{
    const projectVisiblety=backlog.find((p)=>p.id===data.id)
    if(!projectVisiblety){
        
    editProject(
    {
        id:data.id,
        data:{status:"backlog"}
    })
    }
   }
    return (
        <div className={`flex flex-col flex-shrink-0 w-72 ${isOver&&"bg-slate-400 rounded"}`}
        ref={drop}>
        <ProjectsHeader backlog name="Backlog" count={backlog.length}/>
        <div  
        className="flex flex-col pb-2 overflow-auto" >
        
         {backlog?.map((project)=><Project key={project.id} backlog project={project}/>)} 
        </div>
    </div>
    );
};

export default Backlog;