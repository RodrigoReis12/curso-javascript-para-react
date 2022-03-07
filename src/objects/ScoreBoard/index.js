import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import VsPlayer from "../../components/VsPlayer";
import "./style.css";

function ScoreBoard() {
    return /*html*/ `
        <header class="score-board">
            ${PlayerName("Player 1")}
            ${PlayerScore(1)}
            ${VsPlayer()}
            ${PlayerName("Player 2")}
            ${PlayerScore(1)}
        </header>
    `;
}

export default ScoreBoard;