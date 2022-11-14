import TictactoeBoard from "./components/TictactoeBoard"
import ProjectNavbar from "../../ProjectNavbar/ProjectNavbar";
import "./components/styles/App.scss";

function App() {
  return (
    <div id="tictactoe-background">
      <ProjectNavbar/>
      <div id="tictactoe-section">
        <div id='tictactoe-title'>
          Tic-Tac-Toe
        </div>
        <div>
          <TictactoeBoard/>
        </div>
      </div>
    </div>
  );
}

export default App;
