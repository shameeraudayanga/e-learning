import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import App from './App';
import M_001 from './views/M_001';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
      <M_001 />
  </Router>,
=======
import * as serviceWorker from './serviceWorker';
import M_001 from './M_001';

ReactDOM.render(
  <React.StrictMode>
    <M_001 />
  </React.StrictMode>,
>>>>>>> f120f607ea6739ce020aa6e3ea8d731a5b7f56f1
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
