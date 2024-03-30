// TaskRow component definition
export const TaskRow = ({ task, toggleTask }) => {
    return (
      // Table row representing a task
      <tr>
        {/* Table cell containing task name and checkbox */}
        <td className='d-flex justify-content-between'>
          {task.name} {/* Display task name */}
          {/* Checkbox to mark task as done */}
          <input
            type="checkbox"
            checked={task.done} // Check whether task is done or not
            onChange={() => {
              toggleTask(task); // Toggle task status when checkbox is clicked
            }}
          />
        </td>
      </tr>
    );
  };
  