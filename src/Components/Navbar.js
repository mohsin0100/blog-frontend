import React from "react";
import { Link } from "react-router-dom";
// import {
//     BrowserRouter as Router,
//     Route,
//     Link,
//     Routes
// } from "react-router-dom";
// import logo from "../Images/logo.png"
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Login from "./Pages/Login";
// import SignUp from "./Pages/SignUp";
// import Home from "./Pages/Home";
// import BlogDetails from "./Pages/BlogDetails";
// import mon from "../Images/Monday.png"
// import tue from "../Images/Tuesday.png"
// import wed from "../Images/Wed.png"
// import thurs from "../Images/Thurs.png"
// import fri from "../Images/Fri.png"
import destiny from "./Pages/images/logo (1).png"
import blog from "./Pages/images/download (1).jpg"
import one from "./Pages/images/1.png"
import two from "./Pages/images/2.png"
import three from "./Pages/images/3.png"
import four from "./Pages/images/4.png"


const Navbar= () =>{
    return(
        <div>
            <div className="header">
                <Link className="welcome"><img src={blog} width={"90px"} height={"50px"}/></Link>
                <Link className="two"><img src={two} width={"60px"} height={"40px"}/></Link>
                <Link className=""><img src={four} width={"60px"} height={"50px"}/></Link>
                <Link className=""><img src={three} width={"90px"} height={"40px"}/></Link>
                
                <Link className="one"><img src={one} width={"50px"} height={"50px"}/></Link>

            </div>
            <div className="first">
                <br></br><br></br><br></br><br></br><br></br>
                <Link className="logo"><img src={destiny} width={"400px"} height={"100px"}/></Link>
            </div>
            
            <div className="Main">
                <nav className="Navbar">
                    <Link className="a" to="/Home">Home</Link>
                    <Link className="a" to="/About">About</Link>
                    <Link className="a" to="/Contact">Contact</Link>
                    <Link className="a" >Category
                        <select>
                          <Link>blog a</Link>
                          <Link>blog b</Link>
                                
                        </select>
                    </Link>
                    <Link className="a" to="/Login"><button>Login</button></Link>
                    <Link className="a" to="/SignUp"><button>SignUp</button></Link>
                </nav>
            </div>
        </div>



        // <Router>
        //     <div className="Main">
        //         <nav className="Navbar">
        //             <Link><img src={logo}/></Link>
        //             <Link className="a" to="/Home">Home</Link>
        //             <Link className="a" to="/About">About</Link>
        //             <Link className="a" to="/Contact">Contact</Link>
        //             <Link className="a" to="/BlogDetails">Blog Details</Link>
        //             <Link className="a" to="/Login"><button>Login</button></Link>
        //             <Link className="a" to="/SignUp"><button>SignUp</button></Link>
        //         </nav>
        //     </div>
           
        //     <Routes>
        //         <Route path="/Home" element={<Home/>}/>
        //         <Route path="/About" element={<About/>}/>
        //         <Route path="/Login" element={<Login/>}/>
        //         <Route path="/SignUp" element={<SignUp/>}/>
        //         <Route path="/BlogDetails" element={<BlogDetails/>}/>

        //     </Routes>
        // </Router>

    )
}
export default Navbar;