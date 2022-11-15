
import './about.scss';
import { useEffect, useState } from "react";

import AboutSite from "./AboutSite/AboutSite";
import AboutMe from "./AboutMe/AboutMe";

function About(){

    const [infoType, setInfoType] = useState(0);

    useEffect(() => {
        let container = document.querySelector('.container');
        container.style.backgroundColor = "white";
        let body = document.querySelector("body");
        body.style.backgroundColor = "white";
    })

    function changeInfoType(e){
        if (e.target.innerHTML == "About Me"){
            setInfoType(1);
        }else if (e.target.innerHTML == "About This Site"){
            setInfoType(-1);
        }
    }

    return(
        <div className="about-page-container">
            <div className="about-page-intro">
                <div className="about-page-title">
                    About
                </div>
                <div className="about-page-choose-section">
                    <div className="about-page-aboutme-button" style={infoType==1?{textDecoration: 'underline'}:{}} onClick={changeInfoType}>
                        About Me
                    </div>
                    <div className="about-page-aboutsite-button" style={infoType==-1?{textDecoration: 'underline'}:{}} onClick={changeInfoType}>
                        About This Site
                    </div>
                </div>
            </div>
            {
                infoType==1 && <AboutMe/>
            }
            {
                infoType==-1 && <AboutSite/>
            }
        </div>
    )
}
export default About;