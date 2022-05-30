import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function GameItem({ code, icon, name, description }) {
  return (
    <div className="game item">
      <div className="ui small image">
        <img src={icon} alt="game-icon" />
      </div>
      <div className="content">
        <div className="header">
          <b className="name">{name}</b>
        </div>
        <div className="description">{description}</div>
        <div className="extra">
          <Link to={`/game/${code}`}>
            <div className="play ui right floated secondary button inverted">
              Play
              <i className="right chevron icon"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

GameItem.propTypes = {
  code: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default GameItem;
