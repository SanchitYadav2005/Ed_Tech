import React, { useState } from "react";
import Home from "./pages/Home";
import Diversion from "./pages/Diversion";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FilePage from "./pages/FilePage";
import Notes from "./pages/Notes";
import Videos from "./pages/Videos";
import { Routes, Route, Navigate } from "react-router-dom";
import useAuthContext from "./hooks/useAuthContext";

function App() {
  const [isDeveloper, toggleDeveloper] = useState(true);
  const { state } = useAuthContext(); 
  const toggle = () => {
    toggleDeveloper((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={<Diversion toggleDeveloper={toggle} />}
        />
        <Route
          path="/developer/login"
          element={<Login isDeveloper={isDeveloper} />}
        />
        <Route path="/learner/login" element={<Login />} />
        <Route
          path="/developer/signup"
          element={<Signup isDeveloper={isDeveloper} />}
        />
        <Route path="/learner/signup" element={<Signup />} />
        <Route
          path={`/developer/:id`}
          element={state.user ? <FilePage /> : <Navigate to={"/register"} />}
        />
        <Route
          path="/notes"
          element={state.user ? <Notes /> : <Navigate to={"/register"} />}
        />
        <Route
          path="/videos"
          element={state.user ? <Videos /> : <Navigate to={"/register"} />}
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
