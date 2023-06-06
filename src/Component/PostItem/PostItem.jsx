import React from 'react';
import style from './PostItem.module.scss'
import MyButton from "../UI/Button/MyButton";

const PostItem = ({post, remove}) => {
    const removePost = (e) => {
        e.preventDefault()
        remove(post)
    }
    return (
        <div className={style.post}>
            <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
            <MyButton
                version='border'
                onClick={e => removePost(e)}
            >
                Удалить
            </MyButton>
        </div>
    );
};

export default PostItem;