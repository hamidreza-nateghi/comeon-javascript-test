import PropTypes from "prop-types";

function ProfileWidget({ avatar, name, event }) {
  return (
    <div className="ui list">
      <div className="player item">
        <img className="ui avatar image" src={avatar} alt="avatar" />
        <div className="content">
          <div className="header">
            <b className="name">{name}</b>
          </div>
          <div className="description event">{event}</div>
        </div>
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
