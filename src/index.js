import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// reducer!
const count = (state = 0, action) => {
    console.log(`Hey!!! I'm a reducer y'all!!!`);

    return state;
};

const elementList = (state = [], action) => {
  return state;
};

// store!
const storeInstance = createStore(
  combineReducers(
      {
          count,
          elementList,
      }
  )
);

// Provider lets redux and react talk to one another
ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);