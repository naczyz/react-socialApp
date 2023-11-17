import "./Login.css";
import { Navigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
import LoginForm from "../components/LoginForm";

const Login = (props) => {


  return (
    <div className="login">
      {props.user && <Navigate to="/" />}
      <LoginForm setUser={props.setUser} />
    </div>
  );
};

export default Login;
