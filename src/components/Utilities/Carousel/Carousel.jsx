
import './carousel.scss';
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Carousel({src1, src2, src3}){

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
        
                <div className="carousel" data-carousel>
                    <button onClick={(e)=>Switch(e)} className="carousel-button prev" data-carousel-button="prev">
                        prev
                    </button>
                    <button onClick={(e)=>Switch(e)} className="carousel-button next" data-carousel-button="next">
                        next
                    </button>
                    <ul data-slides>
                        <li className="slide" data-active>
                            UTILITY GAMES
                            <img className="games-carousel-img" src={src1} alt=""/>
                        </li>
                        <li className="slide">
                            INTERACTIVE GAMES
                            <Link to="/games" className="game-carousel-link">
                                <img className="games-carousel-img" src={src2} alt=""/>
                            </Link>
                        </li>
                        <li className="slide">
                            FULL SCREEN GAMES
                            <Link to="/fullscreengames" className="game-carousel-link">
                                <img className="games-carousel-img" src={src3} alt=""/>
                            </Link>
                        </li>
                    </ul>
                </div>
        
    )
}

export default Carousel;