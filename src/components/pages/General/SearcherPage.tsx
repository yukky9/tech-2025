import React from 'react';
import ListMovieCards from '../../organisms/lists/ListMovieCards';
import Header from '../../templates/Header';

const SearcherPage = () => {
    return (
        <div>
            <Header/>
            <ListMovieCards/>
        </div>
    );
};

export default SearcherPage;