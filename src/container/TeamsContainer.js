import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Error from '../components/Error';
import Team from "../components/Team";
import { useGetTeamsQuery } from '../features/team/teamApi';
const TeamsContainer = () => {
    const {email}=useSelector((state)=>state.auth.user)
    const {data,isLoading,isError,error}=useGetTeamsQuery(email)
   
// decide what will render..
let content=null
if(isLoading){
    content=<div className='text-red'>Loading....</div>
}else if(!isLoading && isError){
    content=<Error message={error}/>
}
else if(!isLoading && !isError &&data?.length===0){
    content=<Error message="Teams not found!" />
}else if(!isLoading&&!isError&&data?.length>0){
   
content=(<Fragment>
     {
        data.map((team)=>(
            <Team key={team.id} team={team}/>
        ))
     }
 </Fragment>)
   
}
    return <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-10 mt-4 gap-6 overflow-auto">{content}</div>
};

export default TeamsContainer;