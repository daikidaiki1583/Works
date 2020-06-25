import React from 'react';
import './App.css';
import {Route,BrowserRouter} from 'react-router-dom'

import HomePage from './page/homepage/homepage.component';
import Auth from './page/auth/auth.component'
import Header from './component/headrer/header.component'

class App extends React.Component {
  
  render(){
    return (

      <BrowserRouter>
          <Header {...this.props}/>
          <Route exact path='/' component={Auth}/> 
          <Route path='/home' component={HomePage}/>
      </BrowserRouter>
    )
  }

}

export default App;
