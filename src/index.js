import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ReposProvider from './context/ReposProvider';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <ReposProvider>
      <App />
    </ReposProvider>
  </BrowserRouter>,
  
  document.getElementById('root')
);

