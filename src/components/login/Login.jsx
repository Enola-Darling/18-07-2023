import { TodoContext } from "@/state/TodoContext";
import styles from "./index.module.scss";
import { useState, useContext } from "react";

const Login = () => {
    const [inputUsername, setInputUsername] = useState ('');
    const { login } = useContext(TodoContext);

    const handleLogin = () =>  {
        if (inputUsername.trim() !== '') {
            login(inputUsername);
        }
    };


return (
    <>
    <input 
    type="text" 
    valure= {inputUsername}
    onChange={(e) => setInputUsername (e.target.value)}
    />
    <button onClick={handleLogin}>Login</button>
    </>
);
};
export default Login;