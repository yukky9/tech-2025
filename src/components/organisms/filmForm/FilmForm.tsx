import React from 'react';


const FilmForm = ({ title, imageUrl, description }: { title: string; imageUrl: string; description: string }) => {
    const handleClick = () => {
        window.location.href = "/";
    };

    return (
        <div className="mt-24">
            <div className="grid grid-cols-3 gap-3">
                <svg onClick={handleClick} className="mx-auto h-6 w-6 ml-10 -mt-20 text-gray-800 cursor-pointer" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M13 5H1m0 0 4 4M1 5l4-4"/>
                </svg>
                <img className="mx-auto rounded-lg bg-green-400 h-96 w-80 -ml-48" src={imageUrl} alt={title}/>
                <div className="grid grid-rows-4 gap-y-2 -ml-80">
                    <h1 className="text-xl font-bold">{title}</h1>
                    <p className="text-gray-700">{description}</p>
                    <h3 className="font-semibold">Рейтинг: ★5.4</h3>
                </div>
            </div>
        </div>
    );
};

export default FilmForm;
