import React, { useState } from "react";
import './css/style.css';
import './css/terms&service.css';

// import './css/signup.css';

import img from './images/signup-image.jpg';
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "axios";

import TermsOfService from './TermsOfService';

function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== rePassword) {
            alert("Your password and repasswords do not Match")
        } else {
            axios.post('http://localhost:4000/register', {name, email, password, rePassword})
            .then(result => {
                console.log(result);
                if(result.status === 200){
                    navigate('/login');
                }
            })
            .catch(err => console.log(err))
        }
    }

    const [showTermsModal, setShowTermsModal] = useState(false);

    const toggleTermsModal = () => {
      setShowTermsModal(!showTermsModal);
    };


    return(
        <>
            <div className="main">
                <section className="signup">
                    <div className="container">
                        <div className="signup-content">
                            <div className="signup-form">
                                <h2 className="form-title">Sign up</h2>
                                <form onSubmit={handleSubmit} className="register-form" id="register-form">
                                    <div className="form-group">
                                        <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                        <input type="text" name="name" id="name" placeholder="Your Name" onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                        <input type="email" name="email" id="email" placeholder="Your Email"  onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                        <input type="password" name="pass" id="pass" placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                        <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"  onChange={(e) => setRePassword(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                        <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a href="" onClick={toggleTermsModal} className="term-service">Terms of service</a></label>

                                        {showTermsModal && (
                                            <div className="modal">
                                            <div className="modal-content">
                                                <span className="close" onClick={toggleTermsModal}>&times;</span>
                                                <TermsOfService />
                                            </div>
                                            </div>
                                        )}
                                        
                                    </div>
                                    <div className="form-group form-button">
                                        <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                                    </div>
                                </form>
                            </div>
                            <div className="signup-image">
                                <figure><img src={img} alt="Sign up" /></figure>

                                <Link to="/login" className="signup-image-link">I am already a member</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Signup;