import Games from '../components/Games';
import Categories from '../components/Categories';
import data from '../mock/mock-data.json';
import { getPlayerItem } from '../utils';
import ProfileWidget from '../components/ProfileWidget';
import Logout from '../components/Logout';

function Casino() {
  const player = getPlayerItem();

  return (
    <div className="casino">
      <div className="ui grid centered">
        <div className="twelve wide column">
          <ProfileWidget {...player} />
          <Logout />
        </div>
        <div className="four wide column">
          <div className="search ui small icon input ">
            <input type="text" placeholder="Search Game" />
            <i className="search icon"></i>
          </div>
        </div>
      </div>
      <div className="ui grid">
        <Games games={data.games} />
        <Categories categories={data.categories} />
      </div>
    </div>
  );
}

export default Casino;
