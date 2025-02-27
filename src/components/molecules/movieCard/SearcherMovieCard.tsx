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
            <a href={link}
               className="w-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                     src={imageUrl} alt={title}/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                    <p className="mb-3 font-normal text-gray-7000">{description}</p>
                </div>
            </a>
        </div>
    );
};

export default SearcherMovieCard;
