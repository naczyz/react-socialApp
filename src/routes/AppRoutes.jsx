import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import AppNav from "../components/AppNav";

const AppRoutes = (props) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home user={props.user} setUser={props.setUser} />}
      />
      <Route
        path="/login"
        element={<Login user={props.user} setUser={props.setUser} />}
      />
      <Route
        path="/logout"
        element={<Login user={props.user} setUser={props.setUser} />}
      />

      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default AppRoutes;
