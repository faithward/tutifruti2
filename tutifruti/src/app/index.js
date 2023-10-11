import React from 'react';
import ReactDOM from 'react-dom';
import './output.css';
import App from './page';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import reportWebVitals from './reportWebVitals';

//here we render the app in the HTML section with ID root via the App component which contains the other components
ReactDOM.createRoot(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
