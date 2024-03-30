// Importing necessary components and hooks
import { TaskCreator } from "./Components/TaskCreator";
import { useState, useEffect } from "react";
import { TaskTable } from "./Components/TaskTable";
import { VisibilityControl } from "./Components/VisibilityControl";
import { UniqueContainer } from "./Components/UniqueContainer";

// Main ToDoApp component definition
function ToDoApp() {
  // State for managing task items and visibility of completed tasks
  const [tasksItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  // Function to create a new task
  function createTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTaskItems([...tasksItems, { name: taskName, done: false }]); // Add new task to the list
    } else {
      alert("The task already exists"); // Alert if the task already exists
    }
  }

  // Function to toggle task completion status
  const toggleTask = (task) => {
    setTaskItems(
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t // Toggle done status of the task
      )
    );
  };

  // Effect hook to load tasks from local storage on component mount
  useEffect(() => {
    let data = localStorage.getItem("tasks"); // Get tasks data from local storage
    if (data) {
      setTaskItems(JSON.parse(data)); // Parse and set tasks data
    }
  }, []);

  // Function to clean completed tasks
  const cleanTasks = () => {
    setTaskItems(tasksItems.filter(task => !task.done)); // Remove completed tasks from the list
    setShowCompleted(false); // Set showCompleted state to false
  };

  // Effect hook to update tasks data in local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems)); // Store tasks data in local storage
  }, [tasksItems]);

  // Render the ToDoApp component
  return (
    <main className="bg-dark vh-100 text-white">
      {/* Main container for the application */}
      <UniqueContainer>
        {/* ToDoTaskCreator component to add new tasks */}
        <TaskCreator createTask={createTask} />
        {/* ToDoTaskTable component to display tasks */}
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} />
        {/* ToDoVisibilityControl component to toggle visibility of completed tasks */}
        <VisibilityControl
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks}
          isChecked={showCompleted}
        />
        {/* Conditional rendering of completed tasks if showCompleted is true */}
        {showCompleted === true && (
          <TaskTable
            tasks={tasksItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </UniqueContainer>
    </main>
  );
}

export default ToDoApp; // Exporting the ToDoApp component
