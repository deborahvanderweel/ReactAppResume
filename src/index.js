import React from 'react';
import ReactDOM from 'react-dom';
import './Stylesheets/App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Fonts/Montserrat-Bold.ttf';
import './Fonts/Montserrat-Regular.ttf';
import './Fonts/Montserrat-Light.ttf';
import './Fonts/Montserrat-Medium.ttf';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
