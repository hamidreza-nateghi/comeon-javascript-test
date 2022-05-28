import GameItem from './GameItem';

function Games({ games }) {
  return (
    <div className="twelve wide column">
      <h3 className="ui dividing header">Games</h3>
      <div className="ui relaxed divided game items links">
        {games.map(({ code, icon, name, description }) => (
          <GameItem key={code} code={code} icon={icon} name={name} description={description} />
        ))}
      </div>
    </div>
  );
}

export default Games;
