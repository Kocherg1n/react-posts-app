import './App.css'
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import PostList from "../PostList";
import PostAddForm from "../PostAddForm";
import PostStatusFilter from "../PostStatusFilter";
import {useState} from "react";
import {nanoid} from 'nanoid'

const data = {
  posts: [
    {id: 'sDw', label: 'React JS - A JavaScript library for building user interfaces', important: false, liked: true},
    {id: 'Adw', label: 'React makes it painless to create interactive UIs', important: false, liked: false},
    {id: 'ks7', label: 'Build encapsulated components that manage their own state', important: false, liked: false},
    {id: 'k27', label: 'React can also render on the server using Node', important: false, liked: false},
  ],
  term: '',
  filter: 'all'
};


const App = () => {
  const [posts, setPosts] = useState(data.posts);
  const [term, setTerm] = useState(data.term);
  const [filter, setFilter] = useState(data.filter);

  const addPost = (e, body) => {
    e.preventDefault();
    if (body) {
      const updatePosts = [
        ...posts,
        {id: nanoid(3), label: body, important: false}
      ];
      setPosts(updatePosts);
    }
  };

  const deletePost = (id) => {
    const updatePosts = [...posts].filter(item => item.id !== id);
    setPosts(updatePosts);
  };

  const searchPost = (posts, term) => {
    if (!term.length) {
      return posts
    }
    return posts.filter(post => post.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
  };

  const onChangeTerm = (body) => {
    setTerm(body);
  };

  const filteredPost = (posts, filter) => {
    switch (filter) {
      case 'all': {
        return posts;
      }
      case 'liked': {
        return posts.filter(post => post.liked)
      }
      case 'important': {
        return posts.filter(post => post.important)
      }
      default: {
        return posts;
      }
    }
  };

  const onFilteredLike = () => {
    setFilter('liked');
  };

  const onFilteredAll = () => {
    setFilter('all');
  };

  const onFilteredImportant = () => {
    setFilter('important');
  };

  const toggleImportant = (id) => {
    const updatePosts = [...posts].map(post => {
      if (post.id === id) {
        post.important = !post.important
      }
      return post;
    });
    setPosts(updatePosts);
  };

  const toggleLike = (id) => {
    const updatePosts = [...posts].map(post => {
      if (post.id === id) {
        post.liked = !post.liked
      }
      return post;
    });
    setPosts(updatePosts);
  };

  const searchPosts = filteredPost(searchPost(posts, term), filter);
  const likedPostsCounter = searchPosts.filter(post => post.liked).length;

  return (
    <div className="app">
      <AppHeader postsCounter={searchPosts.length} likedPostsCounter={likedPostsCounter} />
      <div className="search-panel d-flex">
        <SearchPanel onChangeTerm={onChangeTerm}/>
        <PostStatusFilter filter={filter} onFilteredLike={onFilteredLike} onFilteredImportant={onFilteredImportant} onFilteredAll={onFilteredAll}/>
      </div>
      <PostList
        posts={searchPosts}
        toggleImportant={toggleImportant}
        toggleLike={toggleLike}
        deletePost={deletePost}/>
      <PostAddForm addPost={addPost}/>
    </div>
  );
};

export default App;
