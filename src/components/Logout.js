import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../features/apiSlice';
import { getPlayerItem } from '../utils';

function Logout() {
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const { username } = getPlayerItem();

  const handleClick = async () => {
    try {
      const res = await logout({ username }).unwrap();
      console.log(res);
      localStorage.removeItem('Player');
      navigate('login');
    } catch (error) {
      alert(error.data.error);
    }
  };

  return (
    <div className="logout ui left floated secondary button inverted" onClick={handleClick}>
      <i className="left chevron icon"></i>Log Out
    </div>
  );
}

export default Logout;
