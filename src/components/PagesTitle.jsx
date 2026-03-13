import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

function PagesTitle({ pages, title }) {
  const { state } = useContext(AuthContext);

  return (
    <div style={{ margin: "3em 0" }}>
      <p style={{ color: "#7d5fff" }}>{pages}</p>
      <h1 style={{ color: "white" }}>{title}</h1>
      {pages == "DASHBOARD" && (
        <p style={{ color: "white" }}>{state.user?.email}</p>
      )}
    </div>
  );
}

export default PagesTitle;
