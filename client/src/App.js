import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar";
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import StuDetails from "./components/stuDetails";
import AdminHome from "./components/adminHome";
import StuList from "./components/stuList";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/stuDetails" element={<StuDetails />} />
          <Route path="/adminHome" element={<AdminHome />} />
          <Route path="/stuList" element={<StuList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
