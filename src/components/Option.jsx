import React from 'react';
import Checkbox from "./UI/Checkbox/Checkbox";
import cl from "./Option.module.css";

const Option = (props) => {
    return (
        <div className={cl.AppCheckboxContent}>
            <p className={props.option.mark === true ? cl.AppCheckboxTitleDark : cl.AppCheckboxTitle }>{props.option.title}</p>
            <Checkbox x={props.option.mark} onClick={() => props.markHandler(props.option.id)}/>
        </div>
    );
};

export default Option;
