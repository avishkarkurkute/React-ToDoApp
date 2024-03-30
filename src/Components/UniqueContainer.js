// This component represents a container element with padding
// and centers its content horizontally in a Bootstrap grid layout.
export const UniqueContainer = ({ children }) => {
    return (
        // Outer container with padding
        <div className="container p-4">
            {/* Inner container with grid layout */}
            <div className="col-md-4 offset-md-4">
                {/* Render children components inside the grid */}
                {children}
            </div>
        </div>
    );
}
