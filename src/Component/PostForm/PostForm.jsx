import style from './PostForm.module.scss'

import React from 'react';
import MainInput from "../UI/MainInput/MainInput";

const PostForm = () => {
    return (
        <div className={style.postForm}>
            <MainInput placeholder="Название"/>
            <MainInput placeholder="Описание"/>
            <button>Создать пост</button>
        </div>
    );
};

export default PostForm;