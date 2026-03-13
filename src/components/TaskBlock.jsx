import { useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";
import "./styles/TaskBlock.css";

function Task({ task }) {
  const { dispatch } = useContext(TaskContext);

  return (
    <div className={`task-card ${task.completed ? "is-done" : ""}`}>
      <div className="task-left-section">
        <div
          className={`check-container ${task.completed ? "checked" : ""}`}
          onClick={() =>
            dispatch({ type: "TOGGLE_COMPLETE", payload: task.id })
          }
        >
          {task.completed && <span className="check-icon">✓</span>}
        </div>

        <div className="task-details">
          <h3 className="task-text">{task.title}</h3>
          <div className="badge-container">
            <span className={`badge badge-cat ${task.category.toLowerCase()}`}>
              {task.category}
            </span>
            <span className={`badge badge-pri ${task.priority.toLowerCase()}`}>
              {task.priority}
            </span>
          </div>
        </div>
      </div>

      <div className="task-right-section">
        <button
          className={`action-btn ${task.completed ? "btn-undo" : "btn-done"}`}
          onClick={() =>
            dispatch({ type: "TOGGLE_COMPLETE", payload: task.id })
          }
        >
          {task.completed ? "Undo" : "Done"}
        </button>
        <button
          className="action-btn btn-del"
          onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
        >
          Del
        </button>
      </div>
    </div>
  );
}

export default Task;
