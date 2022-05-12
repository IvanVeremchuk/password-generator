import React from 'react';

const Checkbox = ({x, ...props}) => {
    return (
        <input {...props} value={x} type="checkbox" />
    );
};

export default Checkbox;
