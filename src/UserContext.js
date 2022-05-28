import { createContext, useState } from 'react';
import { setPlayerItem, getPlayerItem } from './utils';

export const UserContext = createContext();

function UserProvider({ children }) {
  const player = getPlayerItem();
  const [user, setUser] = useState(player);

  const login = (data) => {
    setPlayerItem(data);
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem('Player');
    setUser(null);
  };

  const value = { user, login, logout };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
