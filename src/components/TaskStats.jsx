import "./styles/TaskStats.css";

function TaskStats({ pages, value, des, color }) {
  return (
    <div className={`stats-card stats-${pages}`}>
      {pages == "dashboard" ? (
        <div className="stats-inner">
          <h1 className="stats-value" style={{ color: color }}>
            {value}
          </h1>{" "}
          <p className="stats-des">{des}</p>
        </div>
      ) : (
        <div className="stats-inner">
          <p className="stats-des">{des}</p>{" "}
          <h1 className="stats-value" style={{ color: color }}>
            {value}
          </h1>{" "}
        </div>
      )}
    </div>
  );
}

export default TaskStats;
