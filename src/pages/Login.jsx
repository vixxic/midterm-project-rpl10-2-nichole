import "./styles/Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: false, password: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    let newError = { email: false, password: false };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      newError.email = true;
      isValid = false;
    }

    if (!password) {
      newError.password = true;
      isValid = false;
    }

    setError(newError);

    if (isValid) {
      dispatch({
        type: "LOGIN",
        payload: { email },
      });

      navigate("/dashboard");
    }
  };

  return (
    <div className="login-form-outer">
      <div>
        <h1>
          Welcome Back<span style={{ color: "#8c7cff" }}>.</span>
        </h1>
        <p>Sign in to your workspace</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error.email && <p className="error">Enter a valid email address.</p>}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.password && <p className="error">Password is required.</p>}

        <button type="submit">Sign in</button>
        <p className="email-pass-des">Use any email + password to continue</p>
      </form>
    </div>
  );
}

export default Login;
