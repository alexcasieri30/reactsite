import { Link } from 'react-router-dom';
import ProjectNavbar from "../components/projectNavbar/ProjectNavbar";
import { useEffect, useState } from "react";
import "./homeV1.scss";
import mario from './gifs/5UKF.gif';
import city from './gifs/N0K.gif';
import runningGuy from './gifs/l1G.gif';
import pow from './gifs/1IZc.gif';
import random from './gifs/3D8r.gif';
import loading from './gifs/ZWdx.gif';
import sky from './gifs/2P9x.gif'

import Me from './images/me.jpg';

const NUMGIFS = 6;

function App() {
  const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(true);
  const [time, setTime] = useState(0);


  useEffect(()=>{
    if (!running){
      setRunning(true)
    }
    let container = document.querySelector('.container');
    container.style.backgroundColor = "black";
    let body = document.querySelector('body');
    body.style.backgroundColor="white";

    setInterval(function(){
      let gifs = document.querySelectorAll(".games-gif");
      console.log(gifs.length)
      for (let i = 0; i < gifs.length; i++){
        gifs[i].classList.add("hidden");
      }
      let random = Math.floor((Math.random() * NUMGIFS) + 1).toString();
      console.log(random);
      console.log("-----------")
      let randomId = 'gif' + random;
      let gif = document.getElementById(randomId);
      
      gif.classList.remove('hidden');
    }, 3000)
  });

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
            </div>
            <div className="image-container-div" id="image6">

            </div>
          </div>
        </div>
        <div className="lower-section">
          <div className="image-container-div" id="image2">
          </div>
          <div className="image-container-div" id="images3and4">
            <div className="image-container-div" id="image3">
            </div>
            <div className="image-container-div" id="image4">
            </div>
          </div>
          <div className="image-container-div" id="image5">
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
              <div className="home-page-intro-myskills-body-section" id="myskills-8">Java</div>
              <div className="home-page-intro-myskills-body-section" id="myskills-9">ExpressJS</div>
              <div className="home-page-intro-myskills-body-section" id="myskills-10">Django</div>
              <div className="home-page-intro-myskills-body-section" id="myskills-11">Kubernetes</div>
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
        <div className="home-page-about-section-title">
          A little about me ...
        </div>
        <div className="home-page-about-section-body">
          I was born and raised in Deerfield, Illinois. Since I was a kid, I have always loved exploring, learning, and creating. 
          These traits have allowed me to pursue a career in computer science, which I have recently begun as a full stack software engineer.
          Click below to read more about my background.
        </div>
        <div className="about-me-readmore">
          <Link to="/about">
            <button id="read-more">
              Read More
            </button>
          </Link>
        </div>
      </div>
      <hr />
      <div className="home-page-site-features-snippet">
        <div className="home-page-site-features-title">
          Site Features
        </div>
        <div className="home-page-site-features-body">
          <div className="site-features-row">
            <div className="site-features-col">
              <div className="site-features-feature">
                <div id="gif1" className="games-gif">
                  <img className="gif" style={{height: '10em', width: '12em'}} src={mario} alt="" />
                </div>
                <div id="gif2" className="games-gif hidden" style={{position: 'relative'}}>
                  <img className="gif" src={city} style={{height: '10em', width: '12em',position:'relative', top: '0px', left: '0px'}} alt="" />
                  <img className="gif" src={runningGuy} style={{position:'absolute', bottom: '10px', left: '10px'}} alt="" />
                </div>
                <div id="gif3" className="games-gif hidden">
                  <img className="gif" src={pow} style={{height: '10em', width: '12em',position:'relative', top: '0px', left: '0px'}} alt="" />
                </div>
                <div id="gif4" className="games-gif hidden">
                  <img className="gif" src={random} style={{height: '10em', width: '12em',position:'relative', top: '0px', left: '0px'}} alt="" />
                </div>
                <div id="gif5" className="games-gif hidden">
                  <img className="gif" src={loading} style={{height: '10em', width: '12em',position:'relative', top: '0px', left: '0px'}} alt="" />
                </div>
                <div id="gif6" className="games-gif hidden">
                  <img className="gif" src={sky} style={{height: '10em', width: '12em',position:'relative', top: '0px', left: '0px'}} alt="" />
                </div>
              </div>
            </div>
            <div className="site-features-col">
            <div className="site-features-feature">
                Blog
              </div>
            </div>
          </div>
          <div className="site-features-row">
            <div className="site-features-col">
            <div className="site-features-feature">
                Shop
              </div>
            </div>
            <div className="site-features-col">
              <div className="site-features-feature">
                Settings
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="about-site-readmore">
          <Link to="/about">
            <button id="read-more">
              Read More
            </button>
          </Link>
        </div>
      <div className="home-page-footer">
      </div>
      <div className="home-page-footer-end">
        <div className="social-media-icons">
            <div className="social-media-icon">
              <a href="https://www.linkedin.com/in/alexander-casieri-52b02b19b/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
            <div className="social-media-icon">
              <a href="https://github.com/alexcasieri30">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z"/></svg>
              </a>
            </div>
            <div className="social-media-icon">
              <a href="https://twitter.com/casieri_alex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z"/></svg>
              </a>
            </div>
            <div className="social-media-icon">
              <a href="https://www.facebook.com/alex.casieri/">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm0 5.5c-3.866 0-7 2.902-7 6.481 0 2.04 1.018 3.86 2.609 5.048v2.471l2.383-1.308c.636.176 1.31.271 2.008.271 3.866 0 7-2.902 7-6.482 0-3.579-3.134-6.481-7-6.481zm.696 8.728l-1.783-1.901-3.478 1.901 3.826-4.061 1.826 1.901 3.435-1.901-3.826 4.061z"/></svg>
              </a>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
