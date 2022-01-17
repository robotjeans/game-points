import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import API from '../mockAPI';

export const GameContext = createContext({});

const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState([]);
  const [data, setData] = useState(API.data);

  const isTwo = (match) => {
    const double = gameState.filter((g) => g.key === match);
    if (double.length > 0 && double.length % 2) return true;
    return false;
  };

  const ifBonus = (key, value) => {
    const match = API.bonusKey.filter((b) => b === key);
    if (isTwo(match[0])) {
      return (value += value);
    }
    return value;
  };

  const selectPiece = (i) => {
    setData((state) =>
      state.map((piece, p) => {
        if (i === p) {
          setGameState([
            ...gameState,
            {
              key: piece.key,
              value: ifBonus(piece.key, piece.value),
              selected: !piece.selected,
              quantity: piece.quantity,
              color: piece.color,
            },
          ]);
          return { ...piece };
        }
        return piece;
      }),
    );
    return i;
  };

  const resetGame = () => {
    setGameState([]);
  };

  const gameTotal = gameState.reduce((acc, tile) => acc + tile.value * tile.quantity, 0);

  const ctx = {
    gameState,
    data,
    selectPiece,
    resetGame,
    gameTotal,
  };

  return <GameContext.Provider value={ctx}>{children}</GameContext.Provider>;
};

GameProvider.propTypes = {
  children: PropTypes.node,
};

const useGame = () => useContext(GameContext);

export { GameProvider, useGame };
