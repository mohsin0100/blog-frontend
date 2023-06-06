import React from "react";
// import {Link} from "react-router-dom"
import destiny from "../Components/Pages/images/38328.jpg"
import camel from "../Components/Pages/images/camel.jpg"
import camera from "../Components/Pages/images/camer.jpg"
import fam from "../Components/Pages/images/family.webp"
import goal from "../Components/Pages/images/goal.webp"
import story from "../Components/Pages/images/story.jpg"
import fly from "../Components/Pages/images/fly.jpg"
import hike from "../Components/Pages/images/hike.jpg"
import footer from "../Components/Pages/images/footer-logo.png"

function Footer(){
    return(
     <div className="footer">
        <div>
            <p className="m">FIND ME ON INSTAGRAM</p>
            <h1 className="n">Destination</h1>
        </div>
        <div className="pictures"> 
        <table>
            <tr>
                <th><img src={camel}  width={"200px"} height={"100px"}/></th>
                <th><img src={camera}  width={"200px"} height={"100px"}/></th>
                <th><img src={fam}  width={"200px"} height={"100px"}/></th>
                <th><img src={story} width={"200px"} height={"100px"}/></th>
                <th><img src={fly} width={"200px"} height={"100px"}/></th>
                <th><img src={hike} width={"200px"} height={"100px"}/></th>
                <th><img src={goal} width={"200px"} height={"100px"}/></th>
                <th><img src={destiny}  width={"100px"} height={"100px"}/></th>
            </tr>
        </table>

        </div>
        <div className="mn">
            <br></br>
            <img className="yoo" src={footer} width={"200px"}/>
        </div>
        <div className="end">
            <p>© 2022 - Destination. All Rights Reserved.</p>
        </div>
       

    </div>
    )
}
export default Footer;