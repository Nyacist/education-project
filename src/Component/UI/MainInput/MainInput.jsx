import style from './MainInput.module.scss'

import React from 'react';

const MainInput = React.forwardRef( (props, ref) => {
    return (
        <input
            {...props}
            ref={ref}
            className={style.textInput}
        />
    );
});

export default MainInput;