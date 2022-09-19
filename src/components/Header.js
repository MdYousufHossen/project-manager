import React, { useState } from 'react';
import Modal from './Modal';

const Header = ({name,teams}) => {
    const [opened, setOpened] = useState(false);

    const controlModal = () => {
        setOpened((prevState) => !prevState);
    };
    return (
        <div className="px-10 mt-6 flex justify-between">
                <h1 className="text-2xl font-bold">{name}</h1>
                {teams&&<button
                    className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100"
                    onClick={controlModal}
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        ></path>
                    </svg>
                </button>}
                <Modal open={opened} control={controlModal} />
            </div>
    );
};

export default Header;