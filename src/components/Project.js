import React from 'react';
import { useDrag } from 'react-dnd';
import deleteIcon from "../assets/images/delete-icon.svg";
import { useDeleteProjectMutation } from '../features/project/projectApi';

const Project = ({project,backlog}) => {
    const[deleteProject]=useDeleteProjectMutation()
    const [{ isDragging }, drag] = useDrag({
        type: "project",
		item: project,
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
	});

    const handleDelete=(id)=>{
       if(id){
        deleteProject(id)
       }
    }
    return (
        <div ref={drag}
                className={`relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100 ${isDragging?"opacity-25":"opacity-100"} ${project.borderStyle&&"border-solid border-2 border-indigo-600"}`}
                draggable="true"
             
                
            >
                {backlog&&<img onClick={()=>handleDelete(project.id)} className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex" src={deleteIcon}  alt="delete"/>
                }
              
                <span
                    className="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full"
                    >{project.title}</span>
              
              
                <h4 className="mt-3 text-sm font-medium">
                   {project.desc}
                </h4>
                <div
                    className="flex items-center w-full mt-3 text-xs font-medium text-gray-400"
                >
                    <div className="flex items-center">
                        <svg
                            className="w-4 h-4 text-gray-300 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="ml-1 leading-none"
                            >{project.date}</span
                        >
                    </div>

                    <img
                        className="w-6 h-6 ml-auto rounded-full"
                        src={project.author.avatar}
                        alt={project.author.name}
                    />
                </div>
            </div>
    );
};

export default Project;