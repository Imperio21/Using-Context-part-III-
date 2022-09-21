import React from "react";
import Profile from "./components/profile";
import Login from "./components/login";
import { useAuth } from "./providers/auth";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Profile />
      <Login />
    </div>
  );
}

export default App;
