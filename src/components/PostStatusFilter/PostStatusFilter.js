import React from 'react';

const PostStatusFilter = ({filter, onFilteredLike, onFilteredImportant, onFilteredAll}) => {

  return (
    <div className="btn-group">
      <button
        type="button"
        className={`btn ${filter === 'all' ? 'btn-info' : 'btn-outline-secondary'}`}
        onClick={onFilteredAll}>All
      </button>
      <button
        type="button"
        className={`btn ${filter === 'important' ? 'btn-info' : 'btn-outline-secondary'}`}
        onClick={onFilteredImportant}>Important
      </button>
      <button
        onClick={onFilteredLike}
        type="button"
        className={`btn ${filter === 'liked' ? 'btn-info' : 'btn-outline-secondary'}`}>Liked
      </button>
    </div>
  );
};

export default PostStatusFilter;
