import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Theme kontrolü
const html = document.documentElement;
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
