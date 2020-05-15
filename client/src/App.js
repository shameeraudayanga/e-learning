import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Slide from './Slide';

const App = () => {
  return (
    <Route>
      <Sidebar />
      <Redirect from="/" to="/slide" />
    </Route>
  );

}
  
export default App;
