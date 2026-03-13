import "./styles/Dashboard.css";
import Navbar from "../components/Navbar";
import PagesTitle from "../components/PagesTitle";
import TaskStats from "../components/TaskStats";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";
import DashboardRecentTask from "../components/DashboardRecentTask";

function Dashboard() {
  const { state } = useContext(TaskContext);
  const navigate = useNavigate();

  const recentTasks = [...state.tasks].reverse().slice(0, 3);

  const completionRate =
    state.totaltask === 0
      ? 0
      : Math.round((state.completed / state.totaltask) * 100);
  return (
    <div>
      <Navbar />
      <div className="content-wrapper">
        <PagesTitle pages="DASHBOARD" title="Hey, Student" />

        <div className="stat-con">
          <TaskStats
            pages="dashboard"
            value={state.totaltask}
            des="Total task"
            color="#7c6aff"
          />
          <TaskStats
            pages="dashboard"
            value={state.completed}
            des="Completed"
            color="#69fbb5"
          />
          <TaskStats
            pages="dashboard"
            value={state.pending}
            des="Pending"
            color="#ff6a6a"
          />
        </div>

        <div className="completion-card">
          <div className="completion-header">
            <p>Completion Rate</p>
            <p>{completionRate}%</p>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${completionRate}%` }}
            ></div>
          </div>
        </div>

        <div className="completion-card">
          <div className="recent-header">
            <p>Recent Tasks</p>
            <p className="view-all" onClick={() => navigate("/tasks")}>
              View All
            </p>
          </div>

          <div className="recent-task-list">
            {recentTasks.length === 0 ? (
              <p style={{ color: "#606486" }}>No tasks yet</p>
            ) : (
              recentTasks.map((task) => (
                <DashboardRecentTask key={task.id} task={task} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
