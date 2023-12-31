import {useState} from "react";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";


const LoginForm = (props) =>{
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;

        setFormData({
            ...formData,
            [name]: target.value,
        });
    };

    const [loginMessage, setLoginMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://akademia108.pl/api/social-app/user/login", {
                username: formData.username,
                password: formData.password,
            })
            .then((res) => {
                if (Array.isArray(res.data.username)) {
                    toast.error(res.data.username[0]);
                } else if (Array.isArray(res.data.password)) {
                    toast.error(res.data.password[0]);
                } else if (res.data.error) {
                    toast.error("Incorrect username and password");
                } else {
                    toast.success("Login successful");
                    console.log("jestem tutaj?");
                    props.setUser(res.data);
                    localStorage.setItem("user", JSON.stringify(res.data));
                    props.onClose();
                }
            });
    };



    return (

            <form onSubmit={handleSubmit}>

                {loginMessage && <h2>{loginMessage}</h2>}
                <input
                    type="text"
                    name="username"
                    placeholder="User name"
                    value={formData.username}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <button type="submit" className="btn">Login</button>
            </form>
    );
};





export default LoginForm;