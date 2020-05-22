import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import * as serviceWorker from './serviceWorker';
import M_001 from './M_001';

ReactDOM.render(
  <React.StrictMode>
    <M_001 />
  </React.StrictMode>,
=======
import App from './App';
import M_001 from './Views/M_001';
import * as serviceWorker from './serviceWorker';
import S_001 from './Views/S_001';
import S_002 from './Views/S_002';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
      <M_001 />
      <S_001 />
      {/* <S_002 /> */}
  </Router>,
>>>>>>> c964b38f5778ca331c2572c5fd4d87bea6d68102
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();