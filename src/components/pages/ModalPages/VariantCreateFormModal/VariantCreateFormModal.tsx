import React from 'react';
import CloseButton from "../../../atoms/IconButton/CloseButton/CloseButton";
import PatternCreatePollsForm from "../../../organisms/CreatePollsForm/PatternCreatePollsForm";

const VariantCreateFormModal = () => {
    return (
        <div className='p-10'>
            <a href='/'><CloseButton/></a>
            <PatternCreatePollsForm/>
        </div>
    );
};

export default VariantCreateFormModal;