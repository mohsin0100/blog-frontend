import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";


function SignUp(){
    return(
        <div className="Login">
            <h1 className="new">Create your account</h1><br></br>
            <h2 className="new">This is the SignUp form</h2><br></br>
            <table className="signup">
                <tr>
                    <th><h1>First Name</h1></th>
                </tr>
                <tr>
                    <input className="yoo" placeholder="Enter your first name" required/>
                </tr>
                <tr>
                    <th><h1>Last Name</h1></th>
                </tr>
                <tr>
                    <input className="yoo" placeholder="Enter your last name"required/>
                </tr>
                <tr>
                    <th><h1>Email</h1></th>
                </tr>
                <tr>
                    <input className="yoo" placeholder="Enter your email" required/>
                </tr>
                <tr>
                    <th><h1>Password</h1></th>
                </tr>
                <tr>
                    <input className="yoo" type="password" placeholder="Enter your password" required/>
                </tr>
                
                <br></br>
                <input type="checkbox" className="yoo"/>Keep me logged in? <br></br>
                <br></br>
                <Link><button className="reg-btn">Register</button></Link>
                <br></br>
                <h5>Go back and login if you already have an account</h5>
                <br></br>

            </table>
            <Footer/>


        </div>
    )
}
export default SignUp;