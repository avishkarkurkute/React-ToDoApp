// Importing necessary modules and components
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import './index.css'; // Importing custom CSS styles
import ToDoApp from './ToDoApp'; // Importing the main App component

// Creating a root to render the application
const root = ReactDOM.createRoot(document.getElementById('root')); // Creating a root for ReactDOM

// Rendering the App component into the root
root.render(
    <ToDoApp /> // Rendering the main App component
);
