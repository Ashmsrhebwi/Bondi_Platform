// font awesome
import "@fortawesome/fontawesome-free/css/all.min.css";
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// React Bilesem
import React from "react";
// React bilesenlerini HTML ye Bagalamak
import ReactDOM from 'react-dom';
// Ana bilesenimiz
import App from './App';
// ozel css dosyamiz
import './css/main.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);