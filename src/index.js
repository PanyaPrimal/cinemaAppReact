import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App'; 
// import './index.css';
import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating maxRaiting={10} />
    <StarRating maxRaiting={5} />
    {/* <App /> */}
  </React.StrictMode>
);
