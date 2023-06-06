import React from 'react';
import style from './PostItem.module.scss'
import Button from "../UI/Button/Button";

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
            <Button
                version='border'
                onClick={e => removePost(e)}
            >
                Удалить
            </Button>
        </div>
    );
};

export default PostItem;