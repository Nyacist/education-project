import style from './PostForm.module.scss'

import React, {useState} from 'react';
import MainInput from "../UI/MainInput/MainInput";
import MyButton from "../UI/Button/MyButton";

const PostForm = ({create}) => {
    let [post, setPost] = useState({title: '', body: ''})
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            title: post.title,
            body: post.body,
        }
        create(newPost)
        setPost({title: '', body: ''})
    }
    return (
        <div className={style.postForm}>
            <MainInput
                type="text"
                placeholder="Название"
                value={post.title}
                onChange={(e) => setPost({...post, title: e.target.value})}
            />
            <MainInput
                type="text"
                placeholder="Описание"
                value={post.body}
                onChange={(e) => setPost({...post, body: e.target.value})}
            />
            <MyButton
                version='color'
                onClick={addNewPost}
            >
                Создать пост
            </MyButton>
        </div>
    );
};

export default PostForm;