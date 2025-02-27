import React from 'react';
import SearcherMovieCard from '../../molecules/movieCard/SearcherMovieCard';

interface Movie {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

interface ListMovieCardsProps {
    movies: Movie[];
}

const ListMovieCards: React.FC<ListMovieCardsProps> = ({ movies }) => {
    return (
        <div className="mt-16">
            {movies.map((movie) => (
                <SearcherMovieCard
                    key={movie.link} // Используем уникальный идентификатор, например, ссылку
                    title={movie.title}
                    description={movie.description}
                    imageUrl={movie.imageUrl}
                    link={movie.link}
                />
            ))}
        </div>
    );
};

// Пример использования компонента с передачей массива фильмов
const App = () => {
    const movies = [
        {
            title: 'Фильм 1',
            description: 'Описание фильма 1',
            imageUrl: 'https://example.com/image1.jpg',
            link: 'https://example.com/movie1',
        },
        {
            title: 'Фильм 2',
            description: 'Описание фильма 2',
            imageUrl: 'https://example.com/image2.jpg',
            link: 'https://example.com/movie2',
        },
        {
            title: 'Фильм 3',
            description: 'Описание фильма 3',
            imageUrl: 'https://example.com/image3.jpg',
            link: 'https://example.com/movie3',
        },
    ];

    return <ListMovieCards movies={movies} />;
};

export default App;
