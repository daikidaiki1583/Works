import React from 'react';
import { Switch,Route} from 'react-router-dom'
import './App.css';
import Header from './component/header/header.component'
import HomePage from './page/home/homepage.component'
import Board from './page/board/board.component'
import CreateBoard from './page/createBoard/createBoard.component'

function App() {
  return (
      <div className='App'>
        <Header/>
        <Switch>
            <Route exact path='/' component={HomePage} /> 
            <Route path='/createboard' component={CreateBoard} /> 
            <Route path='/board/:number' component={Board}/>
        </Switch>
      </div>
  );
}

export default App;
