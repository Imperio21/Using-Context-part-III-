import React, { useState } from "react";
import { useAuth } from "../providers/auth";

const Login = () => {
  const [input, setInput] = useState({ name: "" });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { setUser } = useAuth();

  const handleLogin = () => {
    localStorage.setItem("user", JSON.stringify(input));
    setUser(input);
  };
  const handleLogout = () => {
    localStorage.removeItem("user", JSON.stringify(input));
    setUser({
      name: "",
    });
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput({ name: e.target.value })}
      ></input>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Login;
