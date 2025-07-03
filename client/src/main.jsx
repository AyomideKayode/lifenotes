// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk'; // Import thunk for async actions using destructuring*

import reducers from './reducers'; // Adjust the import path as necessary

const theme = createTheme(); // optionally customize later
const store = createStore(reducers, compose(applyMiddleware(thunk)))
// import { store } from './app/store';
// import { createRoot } from 'react-dom/client'
// import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
