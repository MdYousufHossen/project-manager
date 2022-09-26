import React from 'react';
import { useSelector } from 'react-redux';
import { FadeLoader } from 'react-spinners';
import Error from '../components/Error';
import Backlog from '../components/ProjectBoard/Backlog';
import Blocked from '../components/ProjectBoard/Blocked';
import Doing from '../components/ProjectBoard/Doing';
import Done from '../components/ProjectBoard/Done';
import Ready from '../components/ProjectBoard/Ready';
import Review from '../components/ProjectBoard/Review';
import { useGetProjectsQuery } from '../features/project/projectApi';

const ProjectsContainer = () => {
    const {searchString}=useSelector((state)=>state.project)
    const {data:projects,isLoading,isError,error}=useGetProjectsQuery()
    const data=projects?.map((p)=>{
        if(p.title.toLowerCase().includes(searchString.toLowerCase())&&searchString.length>0){
            const  borderStyle=true
            return{ ...p,borderStyle}
        }  
        return p
        })
      
    const backlog=data?.filter((p)=>p.status==="backlog")
    const blocked=data?.filter((p)=>p.status==="blocked")
    const doing=data?.filter((p)=>p.status==="doing")
    const done=data?.filter((p)=>p.status==="done")
    const ready=data?.filter((p)=>p.status==="ready")
    const review=data?.filter((p)=>p.status==="review")


    let content=null
    if(isLoading){
        content=<FadeLoader cssOverride={{margin:"auto"}} color="#36d7b7" />
    }else if(!isLoading && isError){
        content=<Error message={error}/>
    }
    else if(!isLoading && !isError &&projects?.length===0){
        content=<Error message="Project is not found!" />
    }else if(!isLoading&&!isError&&projects?.length>0){
       
    content= <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
     <Backlog backlog={backlog}/>
      <Ready ready={ready}/>
      <Doing doing={doing}/>
      <Review review={review}/>
      <Blocked blocked={blocked}/>
      <Done done={done}/>
      <div className="flex-shrink-0 w-6"></div>
  </div>
       
    }
   
    return content
};

export default ProjectsContainer;