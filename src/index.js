import React from 'react';
import ReactDom from 'react-dom/client';
import App from './app.js';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<App></App>)

// const header=<h1>This is my first React App</h1>
// console.log(header);
// React.createElement()
// ReactDom.render(header,document.getElementById('root'));

//in side the function pass the container element id