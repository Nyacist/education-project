import style from './MainInput.module.scss'

import React from 'react';

const MainInput = (props) => {
    return (
        <input
            {...props}
            className={style.textInput}
        />
    );
};

export default MainInput;