import Navbar from "../components/Navbar";
import PagesTitle from "../components/PagesTitle";
import "./styles/Profile.css";
import TaskStats from "../components/TaskStats";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { AuthContext } from "../context/AuthContext";
import OutBtn from "../components/OutBtn";

function Profile() {
  const { state } = useContext(TaskContext);
  const { state: authState } = useContext(AuthContext);
  const email = authState.user?.email || "guest@email.com";
  const firstLetter = email.charAt(0).toUpperCase();
  const username = email.split("@")[0];

  const completionRate =
    state.totaltask === 0
      ? 0
      : Math.round((state.completed / state.totaltask) * 100);

  const highTasks = state.tasks.filter((t) => t.priority === "high").length;
  const mediumTasks = state.tasks.filter((t) => t.priority === "medium").length;
  const lowTasks = state.tasks.filter((t) => t.priority === "low").length;

  const highPercent =
    state.totaltask === 0 ? 0 : Math.round((highTasks / state.totaltask) * 100);

  const mediumPercent =
    state.totaltask === 0
      ? 0
      : Math.round((mediumTasks / state.totaltask) * 100);

  const lowPercent =
    state.totaltask === 0 ? 0 : Math.round((lowTasks / state.totaltask) * 100);

  return (
    <div>
      <Navbar />
      <div className="content-wrapper">
        <PagesTitle pages="PROFILE" title="Account" />

        <div className="account-card">
          <div className="account-des">
            <div className="profile-avatar">
              <p>{firstLetter}</p>
            </div>

            <div className="des">
              <p>{username}</p>
              <p className="email">{email}</p>
              <p>Logged In</p>
            </div>
          </div>

          <div className="stats-grid">
            <TaskStats
              pages="profile"
              value={state.totaltask}
              des="TOTAL TASK"
              color="#7c6aff"
            />
            <TaskStats
              pages="profile"
              value={state.completed}
              des="COMPLETED"
              color="#69fbb5"
            />
            <TaskStats
              pages="profile"
              value={state.pending}
              des="PENDING"
              color="#ff6a6a"
            />
            <TaskStats
              pages="profile"
              value={`${completionRate}%`}
              des="COMPLETION"
              color="#7c6aff"
            />
          </div>
        </div>

        <div className="profile-priority-card">
          <p style={{ color: "white", fontWeight: "bold" }}>Task by Priority</p>

          <div className="profile-priority">
            <div className="priority-row">
              <p className="label-high">High</p>
              <div className="priority-bar">
                <div
                  className="priority-fill high"
                  style={{ width: `${highPercent}%` }}
                ></div>
              </div>
              <p className="priority-count">{highTasks}</p>
            </div>

            <div className="priority-row">
              <p className="label-medium">Medium</p>
              <div className="priority-bar">
                <div
                  className="priority-fill medium"
                  style={{ width: `${mediumPercent}%` }}
                ></div>
              </div>
              <p className="priority-count">{mediumTasks}</p>
            </div>

            <div className="priority-row">
              <p className="label-low">Low</p>
              <div className="priority-bar">
                <div
                  className="priority-fill low"
                  style={{ width: `${lowPercent}%` }}
                ></div>
              </div>
              <p className="priority-count">{lowTasks}</p>
            </div>
          </div>
        </div>
        <OutBtn pages="profile" text="Sign Out" />
      </div>
    </div>
  );
}

export default Profile;
