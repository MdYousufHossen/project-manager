import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/images/logo.svg";
const Navigation = ({projects}) => {
    return (
        <div
                className="flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75"
            >
                <img src={logo} className="h-10 w-10" alt="" />
             { projects&&  <input
                    className="flex items-center h-10 px-4 ml-10 text-sm bg-gray-200 rounded-full focus:outline-none focus:ring"
                    type="search"
                    placeholder="Search for anything…"
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
                <buton
                    className="flex items-center justify-center w-8 h-8 ml-auto overflow-hidden rounded-full cursor-pointer"
                >
                    <img
                        src="https://assets.codepen.io/5041378/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1600304177&width=512"
                        alt=""
                    />
                </buton>
            </div>
    );
};

export default Navigation;