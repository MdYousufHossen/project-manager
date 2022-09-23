import React, { Fragment } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';

const Layout = ({children,projects}) => {
    return (
        <Fragment>
         <div
        className="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200"
    >
            <Navigation projects={projects}/>
        <main>{children}</main>
        </div>
        <Footer/>
        </Fragment>
    );
};

export default Layout;