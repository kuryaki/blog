import React from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css';

import useFetch from 'use-http';

function App() {

  const options = {}
  const {
    loading,
    error,
    data = []
  } = useFetch('https://raw.githubusercontent.com/kuryaki/blog/master/public/posts/master.json', options, [])

  const postPreviews = data.map((post:any) => {
    return <div className="App-post-preview">
      <a href={"/blog/" + post.slug}>
        <h2>{post.title}</h2>
      </a>
      <p>{post.summary}</p>
    </div>
    ;
  });

  return (
    <div className="App">
      {error && 'Error!'}
      {loading && 'Loading...'}
      <h1>Blog</h1>
      <div className="App-content">
        {postPreviews}
      </div>
      <header className="App-footer">
        <a
          className="App-link"
          href="https://david.roncancio.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          About me
        </a>
      </header>
    </div>
  );
}

export default App;
