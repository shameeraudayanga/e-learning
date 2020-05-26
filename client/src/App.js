import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => getData() );

  const getData = () => {
    if (posts.length === 0) {
      axios
        .get('/api/userName/1')
        .then(response => {
          setPosts(response.data);
          console.log(response.data);
        })
        .catch(() => {
          console.log('失敗しました');
        })
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* {posts.map((data) => (
          <li key={data.user_id}>{data.user_name}{console.log(data.user_name)}</li>))} */}
          {posts.map((data,index) => (
          <li key={index}>{data.Massage}</li>))}
        </a>
      </header>
    </div>
  );
}

export default App;