import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { PostItem } from '../postItem';

export const PostList = ({posts, title, remove}) => {
  
  if(!posts.length) {
    return (
      <div style={{textAlign: "center", marginTop: "65px"}}><h4>Посты не найдены...</h4></div>
    )
  }

  return (
    <div>
      <h2 style={{textAlign: "center", color: "blue"}}>{title}</h2>
      <TransitionGroup>
      {posts.map((post, i ) => 
       <CSSTransition
       key={post.id}
       timeout={500}
       classNames="post"
     >
        <PostItem remove={remove} number={i+1} post={post}/>
      </CSSTransition>

      )}
      </TransitionGroup>
      
    </div>
  );
};
