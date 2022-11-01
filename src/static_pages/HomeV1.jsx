import { Link } from 'react-router-dom';
import ProjectNavbar from "../components/projectNavbar/ProjectNavbar";
import { useEffect } from "react";
import "./homeV1.scss";
import Me from "./images/me.jpg";
import Me1 from "./images/me_home_1.PNG";
import Me2 from "./images/me_home_2.PNG";
import Me3 from "./images/me_home_3.PNG";
import Me4 from "./images/me_home_4.PNG";
import Me5 from "./images/me_home_5.PNG";
import Me6 from "./images/me_home_6.PNG";


function App() {
  useEffect(()=>{
    let container = document.querySelector('.container');
    container.style.backgroundColor = "black";
    let body = document.querySelector('body');
    body.style.backgroundColor="white";
  })

  

  return (
    <div className="home-page">
      <div className="home-page-init">
        <div className="typewriter-animation-section">
          <div className="typewriter-animation-section-child1">
            <h1>Hello, my name is Alex.</h1>
            <h3 className="home-page-subtitle">welcome to my website.</h3>
          </div>
          <div className="typewriter-animation-section-child2">
            <div className="image-container-div" id="image1">
              <img src={Me1} alt="" style={{'width':'200px', 'height':'auto'}}/>
            </div>
            <div className="image-container-div" id="image6">
              <img src={Me6} alt="" style={{'width':'200px', 'height':'auto'}}/>
            </div>
          </div>
        </div>
        <div className="lower-section">
          <div className="image-container-div" id="image2">
            <img src={Me2} style={{'width':'250px', 'height':'auto'}} alt="" />
          </div>
          <div className="image-container-div" id="images3and4">
            <div className="image-container-div" id="image3">
              <img src={Me3} style={{'width':'200px', 'height':'auto'}} alt="" />
            </div>
            <div className="image-container-div" id="image4">
              <img src={Me4} style={{'width':'300px', 'height':'auto'}} alt="" />
            </div>
          </div>
          <div className="image-container-div" id="image5">
            <img src={Me5} style={{'width':'300px', 'height':'auto'}} alt="" />
          </div>
        </div>
      </div>

      <div className="home-page-intro">
        <div className="home-page-intro-toplevel">
          <div className="home-page-intro-title">
          </div>
          <div className="home-page-intro-image-level">
            <div className="home-page-intro-image">
              <img id="home-page-me" src={Me} alt="" />
            </div>
            <div className="home-page-intro-whoami">
              <div className="home-page-intro-whoami-wrapper">
                <div className="home-page-intro-whoami-static-txt">
                  I'm a
                </div>
                <ul className="dynamic-txts">
                  <li><span>Developer</span></li>
                  <li><span>Designer</span></li>
                  <li><span>Creator</span></li>
                  <li><span>Scholar</span></li>
                </ul>
              </div>
                <div className="home-page-intro-whoami-circles">
                <div id="circle1" className="circle"></div>
                <div id="circle2" className="circle"></div>
                <div id="circle3" className="circle"></div>
                <div id="circle4" className="circle"></div>
                <div id="circle5" className="circle"></div>
                <div id="circle6" className="circle"></div>
                <div id="circle7" className="circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-page-intro-bottomlevel">
          <div className="home-page-intro-myskills">
            <div className="home-page-intro-myskills-title">
              SKILLS
            </div>
            <div className="home-page-intro-myskills-body">
              <div className="home-page-intro-myskills-body-section" id="myskills-1">React</div>
              <div className="home-page-intro-myskills-body-section" id="myskills-2">JavaScript</div>
              <div className="home-page-intro-myskills-body-section" id="myskills-3">SASS</div>
              <div className="home-page-intro-myskills-body-section" id="myskills-4">GIT</div>
              <div className="home-page-intro-myskills-body-section" id="myskills-5">Angular</div>
              <div className="home-page-intro-myskills-body-section" id="myskills-6">Python</div>
              <div className="home-page-intro-myskills-body-section" id="myskills-7">Flask</div>
              <div className="home-page-intro-myskills-body-section" id="myskills-8">CreateJS</div>
              <div className="home-page-intro-myskills-body-section" id="myskills-9">ExpressJS</div>
              <div className="home-page-intro-myskills-body-section" id="myskills-10">Django</div>
              <div className="home-page-intro-myskills-body-section" id="myskills-11">Java</div>
              <div className="home-page-intro-myskills-body-section" id="myskills-12">Docker</div>
              <div className="home-page-intro-myskills-body-section" id="myskills-13">Data Analysis</div>
              <div className="home-page-intro-myskills-body-section" id="myskills-14">Machine Learning</div>
              <div className="home-page-intro-myskills-body-section" id="myskills-15">MongoDB</div>
              <div className="home-page-intro-myskills-body-section" id="myskills-16">SQL</div>
              <div className="home-page-intro-myskills-body-section" id="myskills-17">PgAdmin</div>
              <div className="home-page-intro-myskills-body-section" id="myskills-18">Postman</div>
            </div>
          </div>
        </div>
        
        
        
      </div>
      <div className="home-page-about-this-site">
        about
      </div>
      <div className="home-page-games-snippet">
        
      </div>
      <div className="home-page-footer">
        
      </div>
    </div>
  );
}

export default App;
