import React from 'react';
import cl from './InputWindow.module.css';

const InputWindow = ({...props}) => {
    return (
        <input {...props} type="text" className={cl.inputWindow} />
    );
};

export default InputWindow;
