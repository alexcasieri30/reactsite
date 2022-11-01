import React from "react";
import "./projectNavbar.scss";
import Dropdown from "../Utilities/Dropdown";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";


const ProjectNavbar = function(){
    const redirect = useLocation().state;
    const [active, setActive] = useState('');
    const [stopAnimation, setStopAnimation] = useState(false);

    useEffect(() => {
        if (stopAnimation){
            let links = document.querySelectorAll(".project-navbar-link");
            links.forEach((l) => {
                l.style.animation = "none";
            })
        }
        let container = document.querySelector('.container');
        container.style.backgroundColor = "black";
    })

    function activateTitle(e){
        setStopAnimation(true);
        e.currentTarget.parentNode.classList.add('project-navbar-active');
    }

    let memoryclassname = "project-navbar-section";
    let cvletterclassname = "project-navbar-section";
    let sketchclassname = "project-navbar-section";
    let tictactoeclassname = "project-navbar-section";
    let battleshipclassname = "project-navbar-section"

    let memoryTitleBackground = null;
    let cvLetterTitleBackground = null;
    let sketchTitleBackground = null;
    let tictactoeTitleBackground = null;
    let battleshipTitleBackground = null;
    
    console.log("REDIRECT: ", redirect);
    if (redirect){
        if (redirect.from=="memory"){
            memoryclassname = memoryclassname + " project-navbar-active";
            memoryTitleBackground = "#e66465"
        }else if (redirect.from=="cv_letter"){
            cvletterclassname = cvletterclassname + " project-navbar-active";
            cvLetterTitleBackground = "gray"
        }else if (redirect.from=="sketch"){
            sketchclassname = sketchclassname + " project-navbar-active";
            sketchTitleBackground = "lightblue";
        }else if (redirect.from=="tictactoe"){
            tictactoeclassname = tictactoeclassname + " project-navbar-active";
            tictactoeTitleBackground = "#DECBA4";
        }else if (redirect.from=="battleship"){
            battleshipclassname = battleshipclassname + " project-navbar-active";
            battleshipTitleBackground = "rgb(83, 54, 54) ";
        }
    }

    function onButtonClick(e){
        // e.currentTarget.classList.toggle('game-settings-button-active')
    }
    
    return (
        <div className="games-header">
            <div className="project-header-title">
                <div className="project-header-title-left">
                    <div className="project-header-title-left-settings" onClick={onButtonClick}>
                        Settings
                    </div>
                </div>
                <div className="project-header-title-featuredgames">
                    <div className="project-header-title-featured">
                        Featured
                    </div>
                    <div className="project-header-title-games">
                        Games
                    </div>
                </div>
                <div className="project-header-title-right">
                    <div className="project-header-title-right-dropdown">
                        <Dropdown currentPage={"Games"}/>
                    </div>
                </div>
            </div>
            <div className="project-navbar-content">
                <div className="project-navbar-container">
                    <div className={memoryclassname} style={{backgroundColor:memoryTitleBackground}}>
                        <Link className="project-navbar-link" onClick={(e) => activateTitle(e)} to="/games/memory" state={{from:"memory",backgroundColor:'lightred'}}>Memory</Link>
                    </div >
                    <div className={cvletterclassname} style={{backgroundColor:cvLetterTitleBackground}}>
                        <Link className="project-navbar-link" onClick={(e) => activateTitle(e)} to="/games/cv_letter" state={{from:"cv_letter",backgroundColor:'white'}}>CV Letter</Link>
                    </div>
                    <div className={sketchclassname} style={{backgroundColor:sketchTitleBackground}}>
                        <Link className="project-navbar-link" onClick={(e) => activateTitle(e)} to="/games/sketch" state={{from:"sketch",backgroundColor:'lightblue'}}>Sketch</Link>
                    </div>
                    <div className={tictactoeclassname} style={{backgroundColor:tictactoeTitleBackground}}>
                        <Link className="project-navbar-link" onClick={(e) => activateTitle(e)} to="/games/tictactoe" state={{from:"tictactoe",backgroundColor:'lightblue'}}>Tictactoe</Link>
                    </div>
                    <div className={battleshipclassname} style={{backgroundColor: battleshipTitleBackground}}>
                        <Link className="project-navbar-link" onClick={(e) => activateTitle(e)} to="/games/battleship" state={{from:"battleship",backgroundColor:'lightblue'}}>Battleship</Link>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default ProjectNavbar;