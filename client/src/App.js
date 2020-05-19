import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Slide from './Slide';
import M_001 from './M_001';

const App = () => {
  return (
    <Route>
      <M_001 />
      <Redirect from="/" to="/slide" />
    </Route>
  );

}
  
export default App;
