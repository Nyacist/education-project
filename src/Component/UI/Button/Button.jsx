import style from './Button.module.scss'

import React from 'react';

const Button = ({children, version, onClick}) => {
    let btnStyle = style.btn
    if (version === 'color')
        btnStyle = btnStyle + ' ' + style.btnColor
    if (version === 'border')
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

export default Button;