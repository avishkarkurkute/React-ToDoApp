// Importing necessary modules and components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// TaskCreator component definition
export const TaskCreator = ({ createTask }) => {
  // State for managing the new task name
  const [newTaskName, setNewTaskName] = useState();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    createTask(newTaskName); // Call the parent function to create a new task
    localStorage.setItem("tasks", newTaskName); // Store the task in local storage
    setNewTaskName(""); // Clear the input field after task creation
  };

  // Render the TaskCreator component
  return (
    <form onSubmit={handleSubmit} className='my-2 row'>
      {/* Input field for entering new task */}
      <div className='col-9'>
          <input
              type="text"
              value={newTaskName}
              placeholder="Enter a new task"
              onChange={(e) => setNewTaskName(e.target.value)} // Update newTaskName state on input change
              className='form-control'
          />
      </div>
      {/* Button to save the new task */}
      <button className='btn btn-primary btn-sm col-3'>
        <FontAwesomeIcon icon={faPlus} /> Save task
      </button>
    </form>
  );
};
