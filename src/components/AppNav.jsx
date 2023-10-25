import "./AppNav.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faUserPlus,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const AppNav = (props) => {
  const handleLogout = (e) => {
    e.preventDefault();
    axios
      .post("http://akademia108.pl/api/social-app/user/logout")
      .then((res) => {
        localStorage.removeItem("user");
        props.setUser(null);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <nav className="mainNav">
      <ul>
        <li>
          <FontAwesomeIcon icon={faHouse} className="navHome" />
          <Link to="/">Home</Link>
        </li>

        {!props.user && (
          <li>
            <FontAwesomeIcon icon={faUser} className="navHome" />
            <Link to="/login">Login</Link>
          </li>
        )}
        {!props.user && (
          <li>
            <FontAwesomeIcon icon={faUserPlus} className="navHome" />
            <Link to="/signup">SignUp</Link>
          </li>
        )}
        {props.user && (
          <li>
            <FontAwesomeIcon icon={faRightFromBracket} className="navHome" />
            <Link to="/logout" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default AppNav;
