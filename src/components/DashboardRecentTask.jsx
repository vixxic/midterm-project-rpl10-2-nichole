import React, { useContext } from "react";
import "./styles/DashboardRecentTask.css";
import { TaskContext } from "../context/TaskContext.jsx";

function DashboardRecentTask({ task }) {
  const { dispatch } = useContext(TaskContext);

  return (
    <div className="task-item">
      <div className="task-info">
        <div
          className={`dot-indicator ${task.completed ? "completed" : "pending"}`}
          onClick={() =>
            dispatch({ type: "TOGGLE_COMPLETE", payload: task.id })
          }
        ></div>

        <p className={`task-title ${task.completed ? "text-completed" : ""}`}>
          {task.title}
        </p>
      </div>

      <span className={`badge badge-pri ${task.priority.toLowerCase()}`}>
        {task.priority}
      </span>
    </div>
  );
}

export default DashboardRecentTask;
