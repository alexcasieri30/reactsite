import React, { useEffect } from "react";
import ProjectNavbar from "./components/projectNavbar/ProjectNavbar";
import { useState } from 'react';
import axios from 'axios'

function Main(){
    const [data, setData] = useState(0);
    useEffect(()=>{
        let body = document.querySelector('body');
        body.style.backgroundColor="white";
    })
    return(
        <div>
            <ProjectNavbar/>
        </div>
    )
}

export default Main;