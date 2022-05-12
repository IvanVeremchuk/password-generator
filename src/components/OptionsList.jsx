import React from 'react';
import cl from "./OptionsList.module.css";
import Option from "./Option";

const OptionsList = ({options, markHandler}) => {
    return (
        <div className={cl.AppCheckboxes}>
            {options.map(option =>
                <Option key={option.id} option={option} markHandler={markHandler} />
            )}
        </div>
    );
};

export default OptionsList;
