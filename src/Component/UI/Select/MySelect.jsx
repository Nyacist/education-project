import style from './MySelect.module.scss'

import React from 'react';

const MySelect = ({defaultValue, options, value, onChange}) => {
    return (
        <select
            className={style.select}
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            <option disabled value=''>{defaultValue}</option>
            {options.map(option =>
                <option
                    key={option.value}
                    value={option.value}
                >
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;