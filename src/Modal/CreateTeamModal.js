import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useCreateTeamsMutation } from '../features/team/teamApi';

const CreateTeamModal = ({open, control}) => {
const [name,setName]=useState("")
const [desc,setDesc]=useState("")
const {user}=useSelector((state)=>state.auth)
const {email:userEmail,name:userName, avatar,id}=user
const [createTeams,{isLoading,isSuccess}]=useCreateTeamsMutation()

useEffect(()=>{
    if(isSuccess){
        control()
        setName("")
        setDesc("")
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[isSuccess])

const handleSubmit=(e)=>{
    e.preventDefault()
  createTeams({
        name,
        desc,
        date:new Date(),
        member:userEmail,
        users:[{name:userName,email:userEmail,avatar,id}]

    })
}

    return (
      open&& ( <Fragment>
        <div
        onClick={control}
        className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
    ></div>
    <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                       Create team
       </h2>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6" >
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                              
                                <input
                                    id="name"
                                    name="name"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                    placeholder='Title of team'
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}
                                    
                                />
                            </div>
                            <div>
                                <label htmlFor="description" className="sr-only">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                    placeholder="Write Description"
                                    value={desc}
                                    onChange={(e)=>setDesc(e.target.value)}
                                />
                            </div>
                            <div>
                                <input type="color"/>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                                disabled={isLoading}
                               
                            >
                               Submit
                            </button>
                        </div>
                        </form>

    </div>
    </Fragment>)
    );
};

export default CreateTeamModal;