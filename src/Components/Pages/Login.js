import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";


function Login(){
    return(
        <div className="Login">
            <h1 className="new">Login to your account</h1><br></br>
            <h2 className="new">This is the login form</h2><br></br>
            <table className="sup">
                <tr>
                    <th><h1>Enter your username</h1></th>
                </tr>
                <tr>
                    <input className="yo" placeholder="Enter your username" required/>
                </tr>
                <tr>
                    <th><h1>Enter your password</h1></th>
                </tr>
                <tr>
                    <input className="yo" type="password" placeholder="Enter your password"required/>
                </tr>
                <br></br>
                <input type="checkbox"/>Keep me logged in? <br></br>
                <br></br>
                <Link><button className="login-btn">Login</button></Link>
                <br></br>
                <h5>login if you already have an account</h5>
                <br></br>

            </table>
            <Footer/>


        </div>
    )
}
export default Login;