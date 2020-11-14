import React from 'react';
import './PostList.css';
import PostListItem from "../PostListItem";

const PostList = ({posts, deletePost, toggleLike, toggleImportant}) => {

  return (
    <ul className='app-list list-group'>
      {posts.map(item => <PostListItem
        isLiked={item.liked}
        key={item.id}
        toggleImportant={()=>toggleImportant(item.id)}
        toggleLike={() => toggleLike(item.id)}
        deletePost={() => deletePost(item.id)}
        id={item.id}
        label={item.label}
        isImportant={item.important}/>)}
    </ul>
  );
};

export default PostList;
