import React from 'react';
import MovieCard from '../../molecules/movieCard/MovieCard';

const ScrollListMovieCards = () => {
    const movies = [
        {
            id: 1,
            title: "Inception",
            description: "A thief who steals corporate secrets through the use of dream-sharing technology.",
            imageUrl: "https://image.tmdb.org/t/p/w500/your_image_path.jpg",
            link: "#"
        },
        {
            id: 2,
            title: "The Dark Knight",
            description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
            imageUrl: "https://image.tmdb.org/t/p/w500/your_image_path.jpg",
            link: "#"
        },
        {
            id: 3,
            title: "Interstellar",
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            imageUrl: "https://image.tmdb.org/t/p/w500/your_image_path.jpg",
            link: "#"
        },
        {
            id: 4,
            title: "The Matrix",
            description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
            imageUrl: "https://image.tmdb.org/t/p/w500/your_image_path.jpg",
            link: "#"
        },
        {
            id: 5,
            title: "Fight Club",
            description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club.",
            imageUrl: "https://image.tmdb.org/t/p/w500/your_image_path.jpg",
            link: "#"
        },
        {
            id: 6,
            title: "Pulp Fiction",
            description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            imageUrl: "https://image.tmdb.org/t/p/w500/your_image_path.jpg",
            link: "#"
        },
        {
            id: 7,
            title: "The Shawshank Redemption",
            description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            imageUrl: "https://image.tmdb.org/t/p/w500/your_image_path.jpg",
            link: "#"
        },
        {
            id: 8,
            title: "Forrest Gump",
            description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
            imageUrl: "https://image.tmdb.org/t/p/w500/your_image_path.jpg",
            link: "#"
        },
        {
            id: 9,
            title: "The Godfather",
            description: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
            imageUrl: "https://image.tmdb.org/t/p/w500/your_image_path.jpg",
            link: "#"
        },
    ];

    const handleClick = (title: string) => {
        window.location.href = `/movie/${title.replace(/\s+/g, '-').toLowerCase()}`; // Преобразование названия в URL
    };

    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex overflow-x-auto space-x-4 p-4">
                {movies.map((movie) => (
                    <div key={movie.id} onClick={() => handleClick(movie.title)} className="min-w-[400px] cursor-pointer">
                        <MovieCard
                            title={movie.title}
                            description={movie.description}
                            imageUrl={movie.imageUrl}
                            link={movie.link}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScrollListMovieCards;
