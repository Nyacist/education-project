import style from './App.module.scss';

import {useState} from "react";

import PostList from "./Component/PostList/PostList";
import PostForm from "./Component/PostForm/PostForm";
import MySelect from "./Component/UI/Select/MySelect";
import MainInput from "./Component/UI/MainInput/MainInput";
import MyButton from "./Component/UI/Button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'zz 1', body: 'яяя 1'},
        {id: 2, title: 'ввв 2', body: 'fffy 2'},
        {id: 3, title: 'aa 3', body: 'aaa 3'},
    ])

    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts([...posts.filter(p => p.id !== post.id)])
    }

    const sortPost = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <h1 className={style.title}>Создать пост</h1>
            <PostForm create={createPost} />
            {posts.length !== 0 ?
                <div className={style.postList}>
                    <h1 className={style.title}>Список постов</h1>
                    <div className={style.search}>
                        <MainInput
                            placeholder='Поиск'
                        />
                        <MyButton
                            version='color'
                        >Поиск</MyButton>
                    </div>

                    <div className={style.selectSort}>
                        <MySelect
                            value={selectedSort}
                            onChange={sortPost}
                            defaultValue='Сортировать'
                            options={[
                                {name: 'По названию', value: 'title'},
                                {name: 'По описанию', value: 'body'},
                            ]}
                        />
                    </div>
                    <PostList posts={posts} remove={removePost}/>
                </div>
                : <h1 className={style.title}>Посты не найдены</h1>
            }
        </div>
    );
};

export default App;
