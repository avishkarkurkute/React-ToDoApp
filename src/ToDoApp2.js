// Importing necessary modules and components
import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap'; // Importing Container component from reactstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import './App.css'; // Importing custom CSS styles
import InputForm from './components/InputForm'; // Importing InputForm component
import Todo from './components/Todo'; // Importing Todo component

// Main App component definition
const App = () => {
  // State for managing todos
  const [todos, setTodos] = useState([]);

  // Effect hook to load todos from local storage on component mount
  useEffect(() => {
    const localTodos = localStorage.getItem("todos"); // Retrieve todos from local storage
    if (localTodos) {
      setTodos(JSON.parse(localTodos)); // Parse and set todos
    }
  }, []);

  // Function to add a new todo
  const addTodos = async todo => {
    setTodos([...todos, todo]); // Add new todo to the list
  };

  // Effect hook to update todos in local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // Store todos in local storage
  }, [todos]);

  // Function to mark a todo as completed
  const completedFlag = (id) => {
    setTodos(todos.filter(todo => todo.id !== id)); // Filter out the completed todo
  };

  // Render the App component
  return (
    <Container type="fluid">
      <h1>My Todo App</h1>
      {/* InputForm component for adding new todos */}
      <InputForm addTodos={addTodos} />
      {/* Todo component for displaying todos */}
      <Todo todos={todos} completedFlag={completedFlag} />
    </Container>
  );
}

export default App; // Exporting the App component
