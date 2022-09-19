import React from 'react';
import Team from '../components/Team';

const TeamsContainer = () => {
    return (
         <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-10 mt-4 gap-6 overflow-auto"
    >
            <Team name="Design" desc="This is the title of the card for the thing that needs to be done." date="Dec 10"/>
            <Team name="Tech" desc="This is the title of the card for the thing that needs to be done."  date="Dec 10"/>
            <Team name="UI/UX" desc="This is the title of the card for the thing that needs to be done."  date="Dec 10"/>
           
        </div>
    );
};

export default TeamsContainer;