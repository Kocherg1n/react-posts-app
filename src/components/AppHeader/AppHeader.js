import React from 'react';
import './AppHeader.css'

const AppHeader = ({postsCounter, likedPostsCounter}) => {
  return (
    <div className='app-header d-flex'>
      <h1>Posts</h1>
      <h2>{postsCounter} posts, {likedPostsCounter} liked</h2>
    </div>
  );
};

export default AppHeader;
