import "./styles/Tasks.css";
import Navbar from "../components/Navbar";
import PagesTitle from "../components/PagesTitle";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Task from "../components/TaskBlock";

function Tasks() {
  const { state, dispatch } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("low");
  const [filter, setFilter] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category) return alert("Title & Category wajib diisi!");

    dispatch({
      type: "ADD_TASK",
      payload: { title, category, priority },
    });

    setTitle("");
    setCategory("");
    setPriority("low");
  };

  const filteredTasks = state.tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
  });

  return (
    <div className="tasks-container">
      <Navbar />
      <div className="content-wrapper">
        <PagesTitle pages="TASK MANAGER" title="My Tasks" />

        <div className="tasks-add-card">
          <h2 className="card-title">Add New Task</h2>
          <form onSubmit={handleSubmit} className="task-form">
            <div className="input-group">
              <label className="input-label">TASK TITLE</label>
              <input
                type="text"
                placeholder="What needs to be done?"
                className="task-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-row">
              <div className="input-group flex-1">
                <label className="input-label">CATEGORY</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="task-select"
                >
                  <option value="">Select category...</option>
                  <option value="work">Work</option>
                  <option value="study">Study</option>
                  <option value="health">Health</option>
                </select>
              </div>

              <div className="input-group flex-1">
                <label className="input-label">PRIORITY</label>
                <div className="priority-options">
                  <div className="priority-options">
                    <button
                      type="button"
                      className={`priority-btn ${priority === "low" ? "active" : ""}`}
                      value="low"
                      onClick={(e) => setPriority(e.target.value)}
                    >
                      Low
                    </button>

                    <button
                      type="button"
                      className={`priority-btn ${priority === "medium" ? "active" : ""}`}
                      value="medium"
                      onClick={(e) => setPriority(e.target.value)}
                    >
                      Medium
                    </button>

                    <button
                      type="button"
                      className={`priority-btn ${priority === "high" ? "active" : ""}`}
                      value="high"
                      onClick={(e) => setPriority(e.target.value)}
                    >
                      High
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" className="add-task-btn">
              + Add Task
            </button>
          </form>
        </div>

        <div className="sort-task">
          <button
            className={`filter-btn ${filter === "all" ? "active-filter" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            className={`filter-btn ${filter === "pending" ? "active-filter" : ""}`}
            onClick={() => setFilter("pending")}
          >
            Pending
          </button>

          <button
            className={`filter-btn ${filter === "completed" ? "active-filter" : ""}`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>

        <div className="task-list">
          {filteredTasks.length === 0 ? (
            <p style={{ color: "#606486", marginLeft: "0.5em" }}>
              No tasks found!
            </p>
          ) : (
            filteredTasks.map((task) => <Task key={task.id} task={task} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default Tasks;
