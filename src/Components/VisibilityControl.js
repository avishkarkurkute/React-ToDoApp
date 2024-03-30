// VisibilityControl component definition
export const VisibilityControl = ({ setShowCompleted, cleanTasks, isChecked }) => {
    // Function to handle task deletion
    const handleDelete = () => {
        // Prompt user for confirmation before deleting tasks
        if (window.confirm('Are you sure you want to delete it?')) {
            cleanTasks(); // Call cleanTasks function to clear tasks
        }
    };

    // Render the VisibilityControl component
    return (
        <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
            {/* Checkbox to toggle visibility of completed tasks */}
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setShowCompleted(e.target.checked)} // Update showCompleted state on checkbox change
                />
                <label>Show tasks done</label>
            </div>

            {/* Button to clear tasks */}
            <button onClick={handleDelete} className="btn btn-danger btn-sm">Clear</button>
        </div>
    );
};
