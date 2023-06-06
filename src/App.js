import './App.css';

import {useState} from "react";

import PostList from "./Component/PostList/PostList";
import PostForm from "./Component/PostForm/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'title 1', body: 'Body 1'},
        {id: 2, title: 'title 2', body: 'Body 2'},
        {id: 3, title: 'title 3', body: 'Body 3'},
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const deletePost = (post) => {
        setPosts([...posts.filter(p => p.id !== post.id)])
    }

    return (
        <div className="App">
            <h1 className="title">Создать пост</h1>
            <PostForm create={createPost} />
            <h1 className="title">Список постов</h1>
            <PostList posts={posts} remove={deletePost}/>
        </div>
    );
}

export default App;
