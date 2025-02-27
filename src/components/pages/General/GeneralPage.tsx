import React from 'react';
import Main from '../../organisms/main/Main';
import Header from '../../templates/Header';

const GeneralPage = () => {
    return (
        <div>
            <Header/>
            <div className="my-24">
                <Main/>
            </div>
        </div>
    );
};

export default GeneralPage;