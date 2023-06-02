import style from './MainInput.module.scss'

import React from 'react';

const MainInput = ({placeholder}) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className={style.textInput}
        />
    );
};

export default MainInput;