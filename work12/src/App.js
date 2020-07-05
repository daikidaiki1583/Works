import React from 'react';
import {Route,BrowserRouter} from 'react-router-dom'

import './App.css';
import Auth from './page/auth/auth.component'
import Chat from './page/chat/chat.component'
// import SetUserInfo from './page/setUserInfo/setUserInfo.component'

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Auth}/>
      <Route path='/chat' component={Chat}/>
    </BrowserRouter>
  );
}

export default App;
