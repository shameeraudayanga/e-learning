import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { transformFromAstSync } from '@babel/core';
// import ansewer from './components/Answer_takemura';
import S_002 from './views/S_002';


ReactDOM.render(
  <React.StrictMode>
    <S_002 />
    {/* <App />
    <Question /> */}
    {/* <ansewer /> */}
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
