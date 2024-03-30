// This component represents a table of tasks.
// It includes rows for each task and filters tasks based on completion status.

import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {
    // Function to generate table rows based on task completion status
    const taskTableRows = (doneValue) => {
        return tasks
            .filter((task) => task.done === doneValue) // Filter tasks based on completion status
            .map((task) => (
                // Map each filtered task to a TaskRow component
                <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
            ));
    };

    // Render the TaskTable component
    return (
        <table className="table table-dark table-striped table-bordered border-secondary">
            {/* Table header */}
            <thead>
                <tr className="table-primary">
                    <th>Tasks</th> {/* Column for displaying tasks */}
                </tr>
            </thead>
            {/* Table body containing task rows */}
            <tbody>{taskTableRows(showCompleted)}</tbody>
        </table>
    );
};
