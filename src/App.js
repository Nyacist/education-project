import style from './App.module.scss';

import {useMemo, useRef, useState} from "react";

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
    const [searchQuery, setSearchQuery] = useState('')
    const searchInput = useRef('')

    const sortedPosts = useMemo(() => {
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    }, [selectedSort, posts])

    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts([...posts.filter(p => p.id !== post.id)])
    }

    const sortPost = (sort) => {
        setSelectedSort(sort)
    }

    return (
        <div className="App">
            <h1 className={style.title}>Создать пост</h1>
            <PostForm create={createPost}/>
            <div className={style.postList}>
                <h1 className={style.title}>Список постов</h1>
                <div className={style.search}>
                    <MainInput
                        type='text'
                        placeholder='Поиск'
                        ref={searchInput}
                    />
                    <MyButton
                        version='color'
                        onClick={() => setSearchQuery(searchInput.current.value)}
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
                {sortedAndSearchPosts.length !== 0 ?
                    <PostList posts={sortedAndSearchPosts} remove={removePost}/>
                    : <h2 className={style.title}>Посты не найдены</h2>
                }
            </div>
        </div>
    );
};

export default App;
