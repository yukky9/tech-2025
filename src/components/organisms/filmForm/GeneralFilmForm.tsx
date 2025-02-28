import React from 'react';
import FilmForm from './FilmForm';

interface Movie {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

interface GeneralFilmFormProps {
    movie: Movie;
}

const GeneralFilmForm: React.FC<GeneralFilmFormProps> = ({movie}) => {
    if (!movie) {
        return <p>Фильм не найден.</p>;
    }

    return (
        <div className="mx-auto">
            <div className="mb-4">
                <FilmForm title={movie.title} imageUrl={movie.imageUrl} description={movie.description}/>
            </div>
        </div>
    );
};

export default GeneralFilmForm;
