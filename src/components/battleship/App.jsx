import "./App.scss";
import Game from "./components/GamePlay";
import ProjectNavbar from "./../projectNavbar/ProjectNavbar";

function App() {
  return (
    <div>
      <ProjectNavbar/>
      <div className="battleship-app">
      <div className="battleship-left">

      </div>
      <div className="battleship-mid">
        <div className="battleship-header">
        BATTLESHIP
        </div>
        <div className="battleship-game">
          <Game/>
        </div>
        <div className="battleship-footer">

        </div>
      </div>
      <div className="battleship-right">

      </div>
    </div>
    </div>
    
  );
}

export default App;


/*

todo: 
  - fix borders on start page
  - center the ships
  - fix start button
  - fix overlapping ships error
  - handle game win logic
*/