import {useEffect, useState} from "react";
import './Popup.css'
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
import {ToastContainer} from "react-toastify";


const Popup = (props) =>{

    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() =>{
            setIsVisible(true)
        }, 5000);
        return  () => clearTimeout(timer);
    }, []);

    const handleClose = () =>{
        setIsVisible(false);
    }

    return (
        <>
            {isVisible && (
                <div className="popup-container">
                    <div className="popup-content">
                        <h1>Already have an account?</h1>
                        <LoginForm setUser={props.setUser}    onClose={() => setIsVisible(false)}/>
                        <h2>No? Create account! <Link to="/SignUp"  className="linkSignup">SingUp  </Link></h2>
                        <button onClick={handleClose} className="btn">Close</button>
                    </div>
                </div>
            )}
            <ToastContainer position="top-right" />
        </>
    );
};


export default Popup;