import "./settings.scss";
import { useEffect } from "react";

function Settings(){

    useEffect(() => {
        let container = document.querySelector('.container');
        container.style.backgroundColor = "white";
        let body = document.querySelector("body");
        body.style.backgroundColor = "white";
    })

    function clickSubmit(event){
        event.preventDefault();
        let color = event.target.elements.color.value;
        let body = document.querySelector("body");
        body.style.backgroundColor=color;
    }

    return(
        <div class="settings-container">
            <form action="/" onSubmit={clickSubmit}>
            <input name="color" type="color" />
            <input type="submit" />
            </form>

            <div className="swatch">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="logo-holder">
                <div class="bg"></div>
                <div class="bar"></div>
                <div class="bar fill1"></div>
                <div class="bar fill2"></div>
                <div class="bar fill3"></div>
                <div class="bar fill4"></div>
                <div class="bar fill1"></div>
                <div class="bar fill5"></div>
                <div class="bar fill6"></div>
                <div class="bar"></div>
            </div>
            <div style={{height: '500px', marginTop: '500px'}}>

            </div>
            <div className="blurblock">

            </div>
        </div>

    )
}

export default Settings;