import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Sidebar2 from './components/Sidebar2';
import Header from './components/Header';
import Slide from './Slide';

const App = () => {
  return (
    <Route>
      <Header />
      <Sidebar2 />
      <Redirect from="/" to="/slide" />
    </Route>
  );

}
  
export default App;
