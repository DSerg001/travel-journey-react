import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import useAuthStore from "../../store/useAuthStore";
import { notifySuccess, notifyError } from "../../utils/toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const setUserData = useAuthStore((state) => state.setUserData);
  const navigate = useNavigate();

  const handleLogin = () => {
    let hasError = false;

    if (username.trim() === "") {
      setUsernameError("Please fill in the username field.");
      hasError = true;
    } else if (username.length < 4) {
      setUsernameError("Username should be at least 4 characters");
      hasError = true;
    } else {
      setUsernameError("");
    }

    if (password.trim() === "") {
      setPasswordError("Please fill in the password field.");
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (!hasError) {
      const newUserData = {
        isAuthenticated: true,
        user: { username },
      };

      setUserData(newUserData);
      notifySuccess("Login successful");
      navigate("/");
    } else {
      notifyError("Please fix the errors");
    }
  };

  return (
    <div className={styles.centerWrapper}>
      <div className={styles.loginContainer}>
        <h1 className={styles.loginText}>Login</h1>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Username"
            className={`${styles.input} ${
              usernameError ? styles.inputError : ""
            }`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && (
            <div className={styles.errorMessage}>{usernameError}</div>
          )}

          <input
            type="password"
            placeholder="Password"
            className={`${styles.input} ${
              passwordError ? styles.inputError : ""
            }`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <div className={styles.errorMessage}>{passwordError}</div>
          )}

          <button onClick={handleLogin} className={styles.loginButton}>
            Login
          </button>
        </div>
      </div>
    </div>
  );

};

export default Login;
