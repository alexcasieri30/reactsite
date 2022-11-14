
import './about.scss';
import { useEffect } from "react";

function About(){

    useEffect(() => {
        let container = document.querySelector('.container');
        container.style.backgroundColor = "white";
        let body = document.querySelector("body");
        body.style.backgroundColor = "white";
    })

    return(
        <div>About page</div>
    )
}
export default About;