import { createContext, useState } from 'react';

export const GameContext = createContext();

function GameProvider({ children }) {
  const [categoryId, setCategoryId] = useState(0);

  const value = { categoryId, setCategoryId };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export default GameProvider;
