import GameItem from "./GameItem";
import { useGetGamesQuery } from "../features/gameSlice";
import useFilter from "../hooks/useFilter";

function Games() {
  const { data, isError, isLoading } = useGetGamesQuery();
  const filteredData = useFilter(data);

  const renderGames = () => {
    if (isLoading) return <div className="ui active centered inline loader"></div>;

    if (isError)
      return (
        <div className="ui negative message">
          <div className="header">Error</div>
        </div>
      );

    return (
      <div className="ui relaxed divided game items links">
        {filteredData.map(({ code, icon, name, description }) => (
          <GameItem key={code} code={code} icon={icon} name={name} description={description} />
        ))}
      </div>
    );
  };

  return (
    <div className="twelve wide column games">
      <h3 className="ui dividing header">Games</h3>
      {renderGames()}
    </div>
  );
}

export default Games;
