// Login.js
import React, {useState} from "react";
import './css/style.css';
// import './css/login.css';

import img from './images/signin-image.jpg'
import './fonts/material-icon/css/material-design-iconic-font.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "axios";


function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/login', {name, password})
        .then(result => {
            console.log(result);
            if(result.data.success) {
                const { token } = result.data;
                console.log("Token received:", token);
                localStorage.setItem("token", token);
                navigate('/home');
            } else {
                alert("Login error : ", result.data);
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <div className="main">
                <section className="sign-in">
                    <div className="container">
                        <div className="signin-content">
                            <div className="signin-image">
                                <figure><img src={img} alt="sign up" /></figure>
                                <Link to="/register">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a className="signup-image-link">Create an account</a>
                                </Link>
                            </div>

                            <div className="signin-form">
                                <h2 className="form-title">Log in</h2>
                                <form onSubmit={handleSubmit} className="register-form" id="login-form">
                                    <div className="form-group">
                                        <label htmlFor="customer_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                        <input type="text" name="customer_name" id="customer_name" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="customer_pass"><i className="zmdi zmdi-lock"></i></label>
                                        <input type="password" name="customer_pass" id="customer_pass" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                        <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                                    </div>
                                    <div to="/home" className="form-group form-button">
                                        <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                                    </div>
                                </form>
                                <div className="social-login">
                                    <span className="social-label">Or login with</span>
                                    <ul className="socials">
                                        <li>
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a>
                                        </li>
                                        <li>
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a>
                                        </li>
                                        <li>
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Login;
