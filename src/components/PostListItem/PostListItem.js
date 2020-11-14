import React from 'react';
import './PostListItem.css';

const PostListItem = ({label, deletePost, toggleLike, isLiked, toggleImportant, isImportant}) => {

  let liClasses = 'app-list-item d-flex justify-content-between list-group-item list-group-item-light';
  if (isImportant) { liClasses += ' important' }
  if (isLiked) { liClasses += ' like' }

  return (
    <li className={liClasses}>
      <span className="app-list-item-label"
            onClick={toggleLike}
      >{label}</span>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn btn-star btn-sm"
          onClick={toggleImportant}
        >
          <i className="fa fa-star"></i>
        </button>
        <button
          type="button"
          className="btn btn-trash btn-sm"
          onClick={deletePost}
        >
          <i className="fa fa-trash-o"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </li>
  );
};

export default PostListItem;
