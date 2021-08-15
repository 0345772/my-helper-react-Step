import React, { useState } from 'react';
import { MyButton } from '../UI';
import { MyInput } from '../UI';

export const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: "" })

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({ title: "", body: "" })

  }


  return (
    <div>
      <form >
        <MyInput
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
          type="text" placeholder="название поста" />
        <MyInput
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
          type="text" placeholder="описание поста" />
        <MyButton
          onClick={addNewPost}
        >Создать пост</MyButton>
      </form>
    </div>
  );
};
