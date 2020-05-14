import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Slide from './Slide';

const App = () => {
  return (
    <Route>
      <Sidebar />
      <Route path="/slide" component={Slide} />
      <Redirect from="/" to="/" />
    </Route>
  );

}
  
export default App;
