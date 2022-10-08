import Me1 from "./images/me_home_1.PNG";
import Me2 from "./images/me_home_2.PNG";
import Me3 from "./images/me_home_3.PNG";
import Me4 from "./images/me_home_4.PNG";
import Me5 from "./images/me_home_5.PNG";
import Me6 from "./images/me_home_6.PNG";
import './about.scss';
import { useEffect } from "react";

function About(){

    useEffect(()=> {
        const buttons = document.querySelectorAll("[data-carousel-button]");
        buttons.forEach(button => {
            button.addEventListener('click', ()=> {
                const offset = button.dataset.carouselButton === "next"? 1: -1;
                const slides = button.closest("[data-carousel]").querySelector('[data-slides]')
                const activeSlide = slides.querySelector('[data-active]');
                let newIndex = [...slides.children].indexOf(activeSlide) + offset;
                if (newIndex < 0) newIndex = slides.children.length - 1;
                if (newIndex >= slides.children.length) newIndex = 0;
                slides.children[newIndex].dataset.active = true;
                delete activeSlide.dataset.active;
            })
        })
        
    })

    function Switch(event){
        if (event.currentTarget.classList.contains('prev')){
            return -1;
        }
        if (event.currentTarget.classList.contains("next")){
            return 1;
        }
    }

    return(
        <div> 
            <section aria-label='photos'>
                <div className="carousel" data-carousel>
                    <button onClick={(e)=>Switch(e)} className="carousel-button prev" data-carousel-button="prev">
                        prev
                    </button>
                    <button onClick={(e)=>Switch(e)} className="carousel-button next" data-carousel-button="next">
                        next
                    </button>
                    <ul data-slides>
                        <li className="slide" data-active>
                            <img src={Me1} alt=""/>
                        </li>
                        <li className="slide">
                            <img src={Me2} alt=""/>
                        </li>
                        <li className="slide">
                            <img src={Me3} alt=""/>
                        </li>
                    </ul>
                </div>
                
            </section>
        </div>
    )
}

export default About;