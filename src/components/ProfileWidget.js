import PropTypes from "prop-types";
import useMediaQuery from "../hooks/useMediaQuery";

function ProfileWidget({ avatar, name, event }) {
  const isPhone = useMediaQuery(600);

  return (
    <div className="ui list">
      <div className="player item">
        <img className="ui avatar image" src={avatar} alt="avatar" />
        {!isPhone && (
          <div className="content">
            <div className="header">
              <b className="name">{name}</b>
            </div>
            <div className="description event">{event}</div>
          </div>
        )}
      </div>
    </div>
  );
}

ProfileWidget.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  event: PropTypes.string,
};

export default ProfileWidget;
