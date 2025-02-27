import React from 'react';

const LoginButton = () => {
    const handleClick = () => {
        window.location.href = "/login";
    };

    return (
        <button type="button" onClick={handleClick}
                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Войти
        </button>
    );
};

export default LoginButton;