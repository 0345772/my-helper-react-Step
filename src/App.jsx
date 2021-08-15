import React, { useState } from 'react';
// import {Counter} from "./components";
// import {SearchInput} from "./components";
// import {PostItem} from './components';
import { MyButton, PostFilter, PostList } from './components';
import { PostForm } from './components';
import {MyModal} from './components';
import { usePosts } from './hooks';
import './styles/App.css';


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "sss", body: "Dsss" },
    { id: 2, title: "ddd-1", body: "aaaccc" },
    { id: 3, title: "qqq-2", body: "ccc" },
    { id: 4, title: "aaa-3", body: "bbbddd" },
    { id: 5, title: "nnn-4", body: "ddd" },
  ]);
  const [modal, setModal] = useState(false);

  const [filter, setFilter] = useState({ sort: "", query: '' })

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  



  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  // Получаем post из дочернего компонента:

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      {/* <SearchInput/>
      <Counter/>
      <Counter/> */}
      <MyButton
        onClick={() => setModal(true)}
        style={{marginTop: "25px"}}
      >
        Создать пользователя
      </MyButton>
      <MyModal visiable={modal} setVisiable={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      
      <hr style={{ margin: '15px 0' }} />

      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты о JS" />

    </div>
  );
}
export default App;
