import "./styles/Navbar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import OutBtn from "./OutBtn";

function Navbar() {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });

    navigate("/login");
  };

  return (
    <div className="navbar">
      <div>
        <h3 className="logo">Produx</h3>
      </div>

      <div className="links-pages-con">
        <NavLink to="/dashboard" className="link">
          Dashboard
        </NavLink>
        <NavLink to="/tasks" className="link">
          Tasks
        </NavLink>
        <NavLink to="/profile" className="link">
          Profile
        </NavLink>

        <OutBtn pages="navbar" text="Logout" />
      </div>
    </div>
  );
}

export default Navbar;
