import React from 'react'
import { Helmet } from "react-helmet";

function Login() {

    return (
        <div>


            <Helmet>
                <script src="main.js" type="text/javascript" />
                <link rel="stylesheet" type="text/css" href="style2.css" />
            </Helmet>
            <img className="wave" src="img/wave.png" />
            <div className="container">
                <div className="img">
                    <img src="img/bg.svg" />
                </div>
                <div className="login-content">
                    <form action="index.html">
                        <img src="img/avatar.svg" />
                        <h4 className="title">Selamat Datang Di Media Andalas Group</h4>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user" />
                            </div>
                            <div className="div">
                                <h5>Username</h5>
                                <input type="text" className="input" />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock" />
                            </div>
                            <div className="div">
                                <h5>Password</h5>
                                <input type="password" className="input" />
                            </div>
                        </div>
                        <a href="#">Forgot Password?</a>
                        <input type="submit" className="btnLogin" defaultValue="Login" />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login