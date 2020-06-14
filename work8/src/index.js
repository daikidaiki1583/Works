import React from 'react';
import ReactDOM from 'react-dom';
import { createStore ,applyMiddleware } from 'redux';
import { Provider} from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './App';
import counters from './reducer/index';

const store = createStore(counters,applyMiddleware(logger))

const rendering =() => ReactDOM.render(
  <Provider store={store}>
    <App 
      value={store.getState()}
    />
  </Provider> 
  ,
  document.getElementById('root')
);

rendering()
store.subscribe(rendering)
