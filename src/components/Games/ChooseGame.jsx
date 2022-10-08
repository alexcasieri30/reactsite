import Carousel from "../Utilities/Carousel";
import './choosegametype.scss';
import src1 from "../../static_pages/images/me_home_1.PNG"
import src2 from "../../static_pages/images/me_home_2.PNG"
import src3 from "../../static_pages/images/me_home_3.PNG"

function ChooseGameType(){
    return(
        <div>
            <div className="choose-game-carousel-div">
                <Carousel src1={src1} src2={src2} src3={src3}/>
            </div>
        </div>
    )
}

export default ChooseGameType;