import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Sidebar from './sidebar';
import Menu from './menu';
import Menu2 from './menu';

ReactDOM.render(
  <React.StrictMode>
    <Router></Router>
    {/* <App /> */}
    <Sidebar />
    <Menu2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
