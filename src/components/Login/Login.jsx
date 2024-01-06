import React, { useEffect, useState } from "react";
import './Login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import OnlineShopping from '../../assets/OnlineShopping.gif';
import ShoppingBag from '../../assets/ShoppingBag.gif';



//input field
const InputField = ({ icon, type, placeholder, name }) => {
    let [isInputFocus, setInputFocus] = useState(false);
    return (
        <>
            <div className={isInputFocus ? "log-inputfield signiu-input-focus" : "log-inputfield"}>
                <FontAwesomeIcon icon={icon} className="signiu-input-icon" />
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    required
                    onFocus={() => setInputFocus(true)}
                    onBlur={() => setInputFocus(false)}
                />
            </div>
        </>
    )

}


const Login = () => {
    //signin-signup switching
    let [signupMode, setSignupMode] = useState(false);


    const handleSumbit = (e) => {
        e.preventDefault();
    }





    return (
        <>
            <div className={signupMode ? "signiu-container sign-up-mode" : "signiu-container"}>

                <div className="signiu-sliding-circle">
                </div>

                <div className="signiu-forms-container">
                    {/* Sign in Form */}
                    <div className="signiu-form-wrapper sign-in-wrapper">
                        <h1 className="signiu-form-title">
                            Sign in
                        </h1>
                        <form onSubmit={handleSumbit} className="log-form">
                            <InputField
                                icon={faEnvelope}
                                type="email"
                                placeholder="abc@gmail.com"
                                name="email"
                            />
                            <InputField
                                icon={faLock}
                                type="password"
                                placeholder="Password"
                                name="password"
                            />
                            <button type="submit" className="signiu-submit-button"> LOGIN </button>
                        </form>
                    </div>

                    {/* Sign up form */}
                    <div className="signiu-form-wrapper sign-up-wrapper">
                        <h1 className="signiu-form-title">
                            Sign up
                        </h1>
                        <form onSubmit={handleSumbit} className="log-form">
                            <InputField
                                icon={faUser}
                                type="text"
                                placeholder="Name"
                                name="name"
                            />
                            <InputField
                                icon={faEnvelope}
                                type="email"
                                placeholder="abc@gmail.com"
                                name="email"
                            />
                            <InputField
                                icon={faLock}
                                type="password"
                                placeholder="Password"
                                name="password"
                            />
                            <button type="submit" className="signiu-submit-button"> SIGNUP </button>
                        </form>
                    </div>
                </div>


                <div className="signiu-panels-container">
                    {/* left panel */}
                    <div className="signiu-panel signiu-panel-left">
                        <div className="signiu-panel-header">
                            <h2 className="signiu-panel-title">
                                First Time Here?
                            </h2>
                            <p className="signiu-panel-description">
                                Let's Get You Started! <br />Begin your fashion adventure by creating an account with us.
                            </p>
                            <button className="signiu-submit-button signiu-panel-button" onClick={() => setSignupMode(true)}>
                                SIGN UP
                            </button>
                        </div>
                        <div className="signiu-panel-img-wrapper signiu-left-img">
                            <div className="signiu-panel-img ">
                                <img src={OnlineShopping} />
                            </div>
                        </div>
                    </div>

                    {/* right panel */}
                    <div className="signiu-panel signiu-panel-right">
                        <div className="signiu-panel-header">
                            <h2 className="signiu-panel-title">
                                Welcome Back!
                            </h2>
                            <p className="signiu-panel-description">
                                Unleash your style - Login for an exciting fashion experience!
                            </p>
                            <button className="signiu-submit-button signiu-panel-button" onClick={() => setSignupMode(false)}>
                                SIGN IN
                            </button>
                        </div>
                        <div className="signiu-panel-img-wrapper signiu-right-img">
                            <div className="signiu-panel-img ">
                                <img src={ShoppingBag} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;