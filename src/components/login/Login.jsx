import { TodoContext } from "@/state/TodoContext";
import styles from "./index.module.scss";
import { useState, useContext, useReducer } from "react";
import { auth, provider } from "../../plugins/firebase";
import { signInWithPopup } from "firebase/auth";
import { TodoProvider } from "../../state/TodoContext";

const Login = () => {
  const [inputUsername, setInputUsername] = useState("");
  const { login } = useContext(TodoContext);
  //const [state, dispatch] = useReducer(TodoContext.todoReducer, {});

  const handleLogin = () => {
    if (inputUsername.trim() !== "") {
      login(inputUsername);
    }
  };

  const onHandleGoogleAuth = async () => {
    const res = await signInWithPopup(auth, provider);
    login(res.user.email);
  };

  return (
    <div className={styles.loginContainer}>
      <input
        type="text"
        className={styles.loginInput}
        value={inputUsername}
        onChange={(e) => setInputUsername(e.target.value)}
      />
      <button className={styles.loginButton} onClick={handleLogin}>
        Login
      </button>
      <button onClick={onHandleGoogleAuth}>Accedi con Google</button>
    </div>
  );
};

export default Login;
