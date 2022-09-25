import React from "react";
import "./projectNavbar.scss";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useState } from "react";


const ProjectNavbar = function(){
    const redirect = useLocation().state;
    const [active, setActive] = useState('');

    console.log('rendering')
    function activateTitle(e){
        console.log('clicked')
        console.log(e.currentTarget.parentNode);
        e.currentTarget.parentNode.classList.add('project-navbar-active');
    }
    let memoryclassname = "project-navbar-section";
    let cvletterclassname = "project-navbar-section";
    let sketchclassname = "project-navbar-section";
    let tictactoeclassname = "project-navbar-section";

    let memoryTitleBackground = null;
    let cvLetterTitleBackground = null;
    let sketchTitleBackground = null;
    let tictactoeTitleBackground = null;
    console.log("REDIRECT: ", redirect);
    if (redirect){
        if (redirect.from=="memory"){
            memoryclassname = memoryclassname + " project-navbar-active";
            memoryTitleBackground = "#e66465"
        }else if (redirect.from=="cv_letter"){
            cvletterclassname = cvletterclassname + " project-navbar-active";
            cvLetterTitleBackground = "white"
        }else if (redirect.from=="sketch"){
            sketchclassname = sketchclassname + " project-navbar-active";
            sketchTitleBackground = "lightblue";
        }else if (redirect.from=="tictactoe"){
            tictactoeclassname = tictactoeclassname + " project-navbar-active";
            tictactoeTitleBackground = "#DECBA4";
        }
    }
    
    console.log(memoryTitleBackground, cvLetterTitleBackground, sketchTitleBackground)
    return (
        <div className="project-navbar-container">
            <div className={memoryclassname} style={{backgroundColor:memoryTitleBackground}}>
                <Link onClick={(e) => activateTitle(e)} to="/games/memory" state={{from:"memory",backgroundColor:'lightred'}}>Memory</Link>
            </div >
            <div className={cvletterclassname} style={{backgroundColor:cvLetterTitleBackground}}>
                <Link onClick={(e) => activateTitle(e)} to="/games/cv_letter" state={{from:"cv_letter",backgroundColor:'white'}}>CV Letter</Link>
            </div>
            <div className={sketchclassname} style={{backgroundColor:sketchTitleBackground}}>
                <Link onClick={(e) => activateTitle(e)} to="/games/sketch" state={{from:"sketch",backgroundColor:'lightblue'}}>Sketch</Link>
            </div>
            <div className={tictactoeclassname} style={{backgroundColor:tictactoeTitleBackground}}>
                <Link onClick={(e) => activateTitle(e)} to="/games/tictactoe" state={{from:"tictactoe",backgroundColor:'lightblue'}}>Tictactoe</Link>
            </div>
        </div>
    )
}

export default ProjectNavbar;