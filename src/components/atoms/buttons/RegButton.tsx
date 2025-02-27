import React from 'react';

const RegButton = () => {
    const handleClick = () => {
        window.location.href = "/registration";
    };

    return (
        <button onClick={handleClick}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200">
<span
    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-transparent">
Зарегистрироваться
</span>
        </button>
    );
};

export default RegButton;