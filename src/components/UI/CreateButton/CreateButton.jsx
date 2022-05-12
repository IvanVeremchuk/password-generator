import React from 'react';
import cl from './CreateButton.module.css';

const CreateButton = ({children, ...props}) => {
    return (
        <button {...props} className={cl.createButton}>
            {children}
        </button>
    );
};

export default CreateButton;
