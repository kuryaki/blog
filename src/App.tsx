import React from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css';

import useFetch from 'use-http';

function App() {

  const options = {}
  const {
    loading,
    error,
    data:scaffolding = []
  } = useFetch('https://raw.githubusercontent.com/kuryaki/blog/master/public/posts/scaffolding.md', options, [])

  return (
    <div className="App">
      {error && 'Error!'}
      {loading && 'Loading...'}
      <h1>Blog</h1>
      <div className="App-content">
        <div className="App-post-headline">
          <a href="/blog/scaffolding">
            <h2>Scaffolding</h2>
          </a>
          <p>{scaffolding}</p>
          <ReactMarkdown>{scaffolding}</ReactMarkdown>
        </div>
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
