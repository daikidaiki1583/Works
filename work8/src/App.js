import React from 'react';

import logo from './logo.svg';
import './App.css';
import Counter from './component/counter/counter.component';

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />  
         <Counter 
            value={props.value}
         />
      </header>
    </div>
  );
}

export default App;
