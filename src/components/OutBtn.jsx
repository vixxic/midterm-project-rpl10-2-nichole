import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./styles/OutBtn.css";

function OutBtn({ pages, text }) {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });

    navigate("/login");
  };

  return (
    <button className={`logout-btn-${pages}`} onClick={handleLogout}>
      {text}
    </button>
  );
}

export default OutBtn;
