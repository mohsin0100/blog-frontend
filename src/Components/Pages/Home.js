import React from "react";
// import {Link } from "react-router-dom";
// import mon from "../Pages/images/Monday.png"
// import tue from "../Pages/images/Tuesday.png"
// import wed from "../Pages/images/Wed.png"
// import thurs from "../Pages/images/Thurs.png"
// import fri from "../Pages/images/Fri.png"
// import Footer from "../Footer";
import coolest from "./images/th1.jpg"
import guide from "./images/th2.jpg"
import self from "./images/pic.jpg"
import man from "./images/man.webp"
import camel from "./images/camel.jpg"
import camera from "./images/camer.jpg"
import fam from "./images/family.webp"
import goal from "./images/goal.webp"
import story from "./images/story.jpg"
import fly from "./images/fly.jpg"
import hike from "./images/hike.jpg"
import Footer from "../Footer";



function Home(){
    return(

        <div className="home">
            <div className="home1">
               

            </div>
            <div>
                <table className="table">
                        <br></br>
                        <br></br>
                        <br></br>
                    <tr>
                        <tr>
                            <th className="yo">
                                <img className="coolest" src={coolest} width={"300px"} height={"150px"}/><br></br><br></br>
                                <button className="ab">CITY</button><br></br>
                                <h1 className="b">Coolest things to do in beaches 2023</h1>
                                <p className="p">October 26 2017 | Admin | 0 comments</p>
                                <p className="p">Sit vulputate natoque habitant sed orci facilisi suscipit, natoque euismod sollicitudin per aptent.</p>
                            </th>
                            <tr>
                                <th className="o"></th>
                                <th className="yo">
                                    <img className="coolest" src={guide} width={"300px"} height={"150px"}/><br></br><br></br>
                                    <button className="ab">FRANCE</button><br></br>
                                    <h1 className="b">A Travel Guide to Lake Hawai </h1>
                                    <p className="p">Sit vulputate natoque habitant sed orci facilisi suscipit, natoque euismod sollicitudin per aptent.</p>
                                </th>
                            </tr>
                        </tr>
                        <th className="o"></th>
                        <th className="q">
                            <h1 className="b">About Me</h1>
                            <img className="coolest" src={self} width={"300px"} height={"150px"}/><br></br>
                            <p className="b">I love to travel because it gives you to freedom to be yourself and it makes you fall in love with your life. join the something new to taste.</p>
                        </th>
                    </tr>
                </table>
                <table className="table">
                        <br></br>
                        <br></br>
                        <br></br>
                    <tr>
                        <tr>
                            <th className="yo">
                                <img className="coolest" src={man} width={"300px"} height={"150px"}/><br></br><br></br>
                                <button className="ab">DESTINATION</button><br></br>
                                <h1 className="b">Ultimate Boys Packing List for Africa</h1>
                                <p className="p">October 26 2017 | Admin | 0 comments</p>
                                <p className="p">Sit vulputate natoque habitant sed orci facilisi suscipit, natoque euismod sollicitudin per aptent.</p>
                            </th>
                            <tr>
                                <th className="o"></th>
                                <th className="yo">
                                    <img className="coolest" src={camel} width={"300px"} height={"150px"}/><br></br><br></br>
                                    <button className="ab">DESTINATION</button><br></br>
                                    <h1 className="b">Eve is back and all is right in the wold</h1>
                                    <p className="p">Sit vulputate natoque habitant sed orci facilisi suscipit, natoque euismod sollicitudin per aptent.</p>
                                </th>
                            </tr>
                        </tr>
                        <th className="o"></th>
                        <th className="categories">
                            <h1 className="b">Categories</h1>
                            <h3>Adventure</h3>
                            <h3>City</h3>
                            <h3>Destination</h3>
                            <h3>France</h3>
                            <h3>New York</h3>
                            <h3>Mountain</h3>
                        </th>
                    </tr>
                </table>
                <table className="table">
                        <br></br>
                        <br></br>
                        <br></br>
                    <tr>
                        <tr>
                            <th className="yo">
                                <img className="coolest" src={camera} width={"300px"} height={"150px"}/><br></br><br></br>
                                <button className="ab">FRANCE</button><br></br>
                                <h1 className="b">Beach Photography with top super model</h1>
                                <p className="p">October 26 2017 | Admin | 0 comments</p>
                                <p className="p">Sit vulputate natoque habitant sed orci facilisi suscipit, natoque euismod sollicitudin per aptent.</p>
                            </th>
                            <tr>
                                <th className="o"></th>
                                <th className="yo">
                                    <img className="coolest" src={fam} width={"300px"} height={"150px"}/><br></br><br></br>
                                    <button className="ab">NEW YORK</button><br></br>
                                    <h1 className="b">Traveling with your partner is best thing in life</h1>
                                    <p className="p">Sit vulputate natoque habitant sed orci facilisi suscipit, natoque euismod sollicitudin per aptent.</p>
                                </th>
                            </tr>
                        </tr>
                       
                    </tr>
                </table>
                <table className="table">
                        <br></br>
                        <br></br>
                        <br></br>
                    <tr>
                        <tr>
                            <th className="yo">
                                <img className="coolest" src={goal} width={"300px"} height={"150px"}/><br></br><br></br>
                                <button className="ab">ADVENTURE</button><br></br>
                                <h1 className="b">My Goal for this year to travel the world</h1>
                                <p className="p">October 26 2017 | Admin | 0 comments</p>
                                <p className="p">Sit vulputate natoque habitant sed orci facilisi suscipit, natoque euismod sollicitudin per aptent.</p>
                            </th>
                            <tr>
                                <th className="o"></th>
                                <th className="yo">
                                    <img className="coolest" src={story} width={"300px"} height={"150px"}/><br></br><br></br>
                                    <button className="ab">DESTINATION</button><br></br>
                                    <h1 className="b">Dont think only live your Own Story</h1>
                                    <p className="p">Sit vulputate natoque habitant sed orci facilisi suscipit, natoque euismod sollicitudin per aptent.</p>
                                </th>
                            </tr>
                        </tr>
                        <th className="o"></th>
                       
                    </tr>
                </table>
                <table className="table">
                        <br></br>
                        <br></br>
                        <br></br>
                    <tr>
                        <tr>
                            <th className="yo">
                                <img className="coolest" src={fly} width={"300px"} height={"150px"}/><br></br><br></br>
                                <button className="ab">FRANCE</button><br></br>
                                <h1 className="b">Lets Fly Away Dreams only last for a night</h1>
                                <p className="p">October 26 2017 | Admin | 0 comments</p>
                                <p className="p">Sit vulputate natoque habitant sed orci facilisi suscipit, natoque euismod sollicitudin per aptent.</p>
                            </th>
                            <tr>
                                <th className="o"></th>
                                <th className="yo">
                                    <img className="coolest" src={hike} width={"300px"} height={"150px"}/><br></br><br></br>
                                    <button className="ab">FRANCE</button><br></br>
                                    <h1 className="b">The City of Love</h1>
                                    <p className="p">Sit vulputate natoque habitant sed orci facilisi suscipit, natoque euismod sollicitudin per aptent.</p>
                                </th>
                            </tr>
                        </tr>
                        <th className="o"></th>
                    </tr>
                </table>
            </div>
            <Footer/>
        </div>
    
        
    )
}
export default Home;