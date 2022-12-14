import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from "../assets/images/logo.svg";
import { userLoggedOut } from '../features/auth/authSlice';
import { inputSearch } from '../features/project/projectSlice';
const Navigation = ({projects}) => {
    const {auth,project}=useSelector((state)=>state) 
    const {avatar,name}=auth.user
    const dispatch=useDispatch()
   

    const logout=()=>{
        dispatch(userLoggedOut())
        localStorage.clear()
    }
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    return (
        <div
                className="flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75"
            >
                <img src={logo} className="h-10 w-10" alt="" />
             { projects&&  <input
                    className="flex items-center h-10 px-4 ml-10 text-sm bg-gray-200 rounded-full focus:outline-none focus:ring
                    "
                    type="search"
                    placeholder="Search for anything…"
                    value={project.searchString}
                    onChange={(e)=>dispatch(inputSearch(e.target.value))}
                />}
                <div className="ml-10">
                    <NavLink to="/projects"
                     className={({ isActive }) =>
                     isActive ? "mx-2 text-sm font-semibold text-indigo-700" : "mx-2 text-sm font-semibold text-gray-600"
                   } 
                        >Projects</NavLink
                    >
                    <NavLink to="/teams"
                       className={({ isActive }) =>
                       isActive ? "mx-2 text-sm font-semibold text-indigo-700" : "mx-2 text-sm font-semibold text-gray-600"
                     }
                       
                        >Team</NavLink
                    >
                </div>
               
                <Menu>
                
                <Menu.Button
                    className="flex items-center justify-center  overflow-hidden  cursor-pointer ml-auto"
                >
                    <div className='flex items-center'>
                    <h6 className='font-bold mr-5'>{name.toUpperCase()}</h6>
                    <img
                    className='w-8 h-8  rounded-full'
                        src={avatar}
                        alt={name}
                    />
                    </div>
                        <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-20 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            onClick={logout}
                          >
                            Sign out
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu.Button>
                </Menu>
            </div>
    );
};

export default Navigation;