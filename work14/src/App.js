import React from 'react';
import { BrowserRouter ,Route} from 'react-router-dom'
import './App.css';
import Board from './page/board/board.component'

function App() {
  return (

    <BrowserRouter>
      <div className='App'>
        <Route exact path='/' component={Board}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
