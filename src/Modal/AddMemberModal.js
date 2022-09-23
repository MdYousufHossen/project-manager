import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import tick from "../assets/images/tick.svg";
import { useEditTeamMutation } from '../features/team/teamApi';
import { useGetUserQuery } from '../features/user/userApi';

const AddMemberModal = ({open, control,team}) => {
  const [member,setMember]=useState([])
const splitEmail=team.member?.split("-") 
const query=splitEmail?.map((e)=>`email_ne=${e}`).join("&")
   const {data:peoples}=useGetUserQuery(query,{
    skip:!open
   })

const {email:myEmail}=useSelector((state)=>state.auth.user)
const [editTeam] =useEditTeamMutation()

const handleSubmit=()=>{
  const emails=member.map((m)=>m.email).join("-").concat(`-${team.member}`)
  const users=member.map((m)=>({email:m.email,name:m.name,avatar:m.avatar,id:m.id})).concat(team?.users)
   
  editTeam({
    id:team.id,
    prevMember:myEmail,
    data:{
      member:emails,
      users:users
    }
   })
   setMember([])
 
}



    return (open&&(  <Fragment>
          <div
          onClick={control}
          className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
      ></div>
      <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
    {peoples?.length>0? <div>
          <h6 className="mt-6 text-center text-xl font-extrabold text-gray-900"> Add Member in <span className='text-violet-500'>{team.name}</span> Team </h6>
                    
          <ul ul className='h-64 overflow-y-scroll'>
               {peoples?.map((people)=>{
                const selectedObjects=member?.find((p)=>p.id===people?.id)
                const selectedMember=selectedObjects?.id===people?.id
                const handleSelect=()=>{
                  const selectedPeople=member?.find((p)=>p.id===people?.id)
                  if(selectedPeople){
                    const alreadySelected= member?.filter((p)=>p.id!==people.id)
                   setMember([...alreadySelected])
                  }else{
                    setMember((prevState)=>[...prevState,{...people}])
                  }
                }
                return (<li onClick={handleSelect} key={people.id} className='flex justify-between items-center hover:bg-gray-200 text-gray-700 active:bg-violet-700 active:text-white mx-5 my-2 rounded-full cursor-pointer' >
                    
                         <div className='flex'>
                         <img src={people.avatar} className="h-8 w-8 flex-shrink-0 rounded-full" alt="LWS Logo" />
                     
                        
                         <span className='mx-5'> {people.name} </span>
                         </div>
                        {selectedMember&&<img className="h-6 w-6" src={tick} alt="tick"/> }
                     </li>)
               })}
              
                 </ul>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                       onClick={handleSubmit}
                       disabled={member.length===0}
                    >
                       Submit
                    </button>
     </div>:<div className='text-red-500'>Member is not found!</div>}

      
      </div>
      </Fragment>)
      
  
    )   
};


export default AddMemberModal;

