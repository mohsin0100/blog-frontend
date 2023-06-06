import React from "react";
import {Link } from "react-router-dom";
import mon from "../Pages/images/Monday.png"
import tue from "../Pages/images/Tuesday.png"
// import wed from "../Pages/images/Wed.png"
import thurs from "../Pages/images/Thurs.png"
import fri from "../Pages/images/Fri.png"
import Footer from "../Footer";
// import yo from "../Pages/images/download.jpg"
import me from "./images/me1.jpg"

function About(){
    return(
        <div className="about">
            <br></br>
            <br></br>
            <br></br>
            <h1>About Me</h1>
            <div className="about1">
                <table className="g">
                    <br></br>
                    <tr className="para">
                        <th>
                            <h1>Hi, I'm Mohsin</h1>
                            <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                            <br></br>
                            <p>The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me?” he thought.</p>
                            <br></br>
                            <p>It wasn’t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay</p>
                        </th>
                        <th className="l">
                            <img src={me} height={"100%"} width={"100%"}/>
                        </th>
                    </tr>
                    <br></br>

                    
                </table>
                <Footer/>
            </div>
           
        </div>
    )
}
export default About;