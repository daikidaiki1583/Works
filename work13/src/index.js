import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import inputText from './reducer/index'

const store = createStore(inputText)

const rendering = () => ReactDOM.render(
  <Provider store={store}>
    <App 
      value={store.getState()}
    />
  </Provider>,
  document.getElementById('root')
);

rendering()
store.subscribe(rendering)