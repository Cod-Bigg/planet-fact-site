import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Planets from './Planets';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Planets planetName="Mercury" rotation="58.6 Days" revolution="87.97 Days" radius="2,439.7 KM" temperature="430°c"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
