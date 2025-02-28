import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface MovieCardProps {
    id: number; // Идентификатор фильма для запросов
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ id, title, description, imageUrl, link }) => {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    // Получаем количество лайков при монтировании компонента
    useEffect(() => {
        const fetchLikes = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/movies/${id}/likes`);
                setLikes(response.data.likes); // Предполагаем, что API возвращает объект с количеством лайков
            } catch (error) {
                console.error('Error fetching likes:', error);
            }
        };

        fetchLikes();
    }, [id]);

    const handleLike = async (event: React.MouseEvent) => {
        event.stopPropagation();
        try {
            if (liked) {
                // Если уже лайкнули, убираем лайк
                await axios.delete(`http://localhost:5000/movies/${id}/like`);
                setLikes(likes - 1);
            } else {
                // Если не лайкнули, ставим лайк
                await axios.post(`http://localhost:5000/movies/${id}/like`);
                setLikes(likes + 1);
            }
            setLiked(!liked);
        } catch (error) {
            console.error('Error liking movie:', error);
        }
    };

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
            <a href={link}>
                <img className="rounded-t-lg" src={imageUrl} alt={title} />
            </a>
            <div className="p-5">
                <a href={link}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">{description}</p>
                <div className="flex items-center justify-between">
                    <a
                        href={link}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        Подробнее
                        <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                    <button onClick={handleLike} className="flex items-center focus:outline-none">
                        <svg
                            className={`w-6 h-6 ${liked ? 'text-red-500' : 'text-gray-400'} transition-colors duration-200`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            />
                        </svg>
                        <span className="ml-2">{likes}</span> {/* Отображение количества лайков */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;

