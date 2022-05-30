import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Game() {
  const { code } = useParams();

  useEffect(() => window.comeon.game.launch(code), [code]);

  return (
    <div className="ingame">
      <div className="ui grid centered">
        <div className="three wide column">
          <Link to="/">
            <div className="ui right floated secondary button inverted">
              <i className="left chevron icon"></i>Back
            </div>
          </Link>
        </div>
        <div className="ten wide column">
          <div id="game-launch"></div>
        </div>
        <div className="three wide column"></div>
      </div>
    </div>
  );
}

export default Game;
