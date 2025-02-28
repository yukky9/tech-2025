import React from 'react';

interface SearcherMovieCardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

const SearcherMovieCard: React.FC<SearcherMovieCardProps> = ({ title, description, imageUrl, link }) => {
    return (
        <div className="mt-5 max-w-5xl mx-auto">
            <a href={link} className="gap-3 w-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 transition duration-200">
                <img
                    className="object-cover w-full h-48 md:h-48 md:w-48 rounded-lg md:rounded-none md:rounded-l-lg"
                    src={imageUrl}
                    alt={title}
                />
                <div className="flex flex-col justify-between p-4 leading-normal text-left">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                    <p className="mb-3 font-normal text-gray-700 truncate max-w-3xl">{description}</p>
                </div>
            </a>
        </div>
    );
};

export default SearcherMovieCard;
