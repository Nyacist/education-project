import style from './MyButton.module.scss'

import React from 'react';

const MyButton = ({children, version, onClick}) => {
    let btnStyle = style.btn
    if (version === 'color')
        btnStyle = btnStyle + ' ' + style.btnColor
    if (version === 'border' || version === undefined)
        btnStyle = btnStyle + ' ' + style.btnBorder
    return (
        <button
            className={btnStyle}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default MyButton;