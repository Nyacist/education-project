import style from './PostList.module.scss'
import React from 'react';
import PostItem from "../PostItem/PostItem";

const PostList = ({posts}) => {
    return (
        <div className={style.postForm}>
            {posts.map(post =>
                <PostItem post={post}/>
            )}
        </div>
    );
};

export default PostList;