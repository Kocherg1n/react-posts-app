import React, {useState} from 'react';
import './PostAddForm.css';

const PostAddForm = ({addPost}) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <form
      className="bottom-panel d-flex"
      onSubmit={(e)=> {
        addPost(e, inputValue);
        setInputValue('');
      }}
    >
      <input
        className="form-control new-post-label"
        type="text"
        placeholder="post text..."
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
      />
      <button
        className="btn btn-outline-secondary text-nowrap"
        type="submit"
      >Add post</button>
    </form>
  );
};

export default PostAddForm;
