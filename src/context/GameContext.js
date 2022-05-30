import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const GameContext = createContext();

function GameProvider({ children }) {
  const [categoryId, setCategoryId] = useState(0);

  const value = { categoryId, setCategoryId };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

GameProvider.propTypes = {
  children: PropTypes.element,
};

export default GameProvider;
