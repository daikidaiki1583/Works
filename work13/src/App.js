import React from 'react';
import './App.css';

import Board from './page/board/board.component'

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <Board
        value={props.value}
      />
    </div>
  );
}

export default App;
