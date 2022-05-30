import Games from "../components/Games";
import Categories from "../components/Categories";
import { getPlayerItem } from "../utils";
import ProfileWidget from "../components/ProfileWidget";
import Logout from "../components/Logout";
import GameProvider from "../context/GameContext";
import SearchInput from "../components/SearchInput";

function Casino() {
  const player = getPlayerItem();

  return (
    <GameProvider>
      <div className="casino">
        <div className="ui grid centered">
          <div className="twelve wide column">
            <ProfileWidget {...player} />
            <Logout />
          </div>
          <div className="four wide column">
            <SearchInput />
          </div>
        </div>
        <div className="ui grid">
          <Games />
          <Categories />
        </div>
      </div>
    </GameProvider>
  );
}

export default Casino;
