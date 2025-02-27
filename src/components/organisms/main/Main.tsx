import React from 'react';
import ScrollListMovieCards from '../lists/ScrollListMovieCards';

const Main = () => {
    return (
        <div className="grid grid-rows-3 gap-y-4 justify-center">
            <div className="grid grid-rows-2 gap-y-2">
                <h3>Популярное</h3>
                <ScrollListMovieCards/>
            </div>
            <div className="grid grid-rows-2 gap-y-2">
                <h3>Рекомендации</h3>
                <ScrollListMovieCards/>
            </div>
            <div className="grid grid-rows-2 gap-y-2">
                <h3>Экшен</h3>
                <ScrollListMovieCards/>
            </div>
        </div>
    );
};

export default Main;