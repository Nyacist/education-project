import React from 'react';
import style from './PostItem.module.scss'

const PostItem = ({post}) => {
    return (
        <div className={style.post}>
            <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
            <button>Удалить</button>
        </div>
    );
};

export default PostItem;