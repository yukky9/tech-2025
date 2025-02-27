import React from 'react';
import ScrollListMovieCards from '../lists/ScrollListMovieCards';

const Main = () => {
    return (
        <div className="grid grid-rows-3 gap-y-4 justify-center">
            <div className="mb-10">
                <h3 className="text-4xl font-medium text-gray-900 mb-10">Популярное</h3>
                <ScrollListMovieCards/>
            </div>
            <div className="mb-10">
                <h3 className="text-4xl font-medium text-gray-900 mb-10">Рекомендации</h3>
                <ScrollListMovieCards/>
            </div>
            <div className="mb-10">
                <h3 className="text-4xl font-medium text-gray-900 mb-10">Экшен</h3>
                <ScrollListMovieCards/>
            </div>
        </div>
    );
};

export default Main;