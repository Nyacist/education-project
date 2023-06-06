import style from './PostList.module.scss'
import React from 'react';
import PostItem from "../PostItem/PostItem";

const PostList = ({posts, remove}) => {

    return (
        <div className={style.postList}>
            {posts.map(post =>
                <PostItem post={post} key={post.id} remove={remove}/>
            )}
        </div>
    );
};

export default PostList;