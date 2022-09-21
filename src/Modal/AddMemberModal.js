import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import tick from "../assets/images/tick.svg";
import { useEditTeamMutation } from '../features/team/teamApi';
import { useGetUserQuery } from '../features/user/userApi';
// const peoples = [
//     {
//       id: 1,
//       name: 'Wade Cooper',
//       avatar:
//         'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       id: 2,
//       name: 'Arlene Mccoy',
//       avatar:
//         'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       id: 3,
//       name: 'Devon Webb',
//       avatar:
//         'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
//     },
//     {
//       id: 4,
//       name: 'Tom Cook',
//       avatar:
//         'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       id: 5,
//       name: 'Tanya Fox',
//       avatar:
//         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       id: 6,
//       name: 'Hellen Schmidt',
//       avatar:
//         'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       id: 7,
//       name: 'Caroline Schultz',
//       avatar:
//         'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       id: 8,
//       name: 'Mason Heaney',
//       avatar:
//         'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       id: 9,
//       name: 'Claudie Smitham',
//       avatar:
//         'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       id: 10,
//       name: 'Emil Schaefer',
//       avatar:
//         'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   ]
const AddMemberModal = ({open, control,team}) => {
  const [member,setMember]=useState([])
const splitEmail=team.member?.split("-") 
const query=splitEmail?.map((e)=>`email_ne=${e}`).join("&")
   const {data:peoples}=useGetUserQuery(query,{
    skip:!open
   })
  console.log(peoples,"peoples")
const {email:myEmail}=useSelector((state)=>state.auth.user)
const [editTeam,{data,}] =useEditTeamMutation()

const handleSubmit=()=>{
  const emails=member.map((m)=>m.email).join("-").concat(`-${team.member}`)
  const users=member.map((m)=>({email:m.email,name:m.name,avatar:m.avatar})).concat(team?.users)
   
  editTeam({
    id:team.id,
    data:{
      member:emails,
      users:users
    }
   })
    console.log(team,emails,"teammmmmm")
 
}



    return (
      open&& ( <Fragment>
        <div
        onClick={control}
        className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
    ></div>
    <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900"> Add Member team </h2>
                  
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
                            >
                               Submit
                            </button>
    </div>
    </Fragment>)
    );
};

export default AddMemberModal;

// https://meet.google.com/xyh-hegv-anc?fbclid=IwAR0zQn7Q1LEQTBxteSaXnyHHYmsN7AVdxS-rd_u2B7YGgeAcp8P_nIoW1gM&hs=49